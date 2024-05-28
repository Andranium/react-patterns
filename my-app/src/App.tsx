import "./App.scss";
import { MemberCard } from "./components/memberCard";
import { useEffect, useState } from "react";
import { UserProps } from "./components/memberCard/types";
import { Button } from "./components/button";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import {useFetcher} from "./hooks/useFetcher";

export default function App() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [moreUsers, setMoreUsers] = useState<UserProps[]>([]);
  const [addedUser, setAddedUser] = useState<UserProps | null>(null);
  const [tabForm, setTabForm] = useState(true);
  const {fetchData} = useFetcher();

  useEffect(() => {
    fetchData(setUsers as any);
  }, []);

  const onButtonClick = () => {
    fetchData(setMoreUsers as any);
  };

  const handleUserAddition = (user: UserProps) => {
    setAddedUser(user);
  };

  function mapper(arr: Array<UserProps>) {
    return arr.map((user: UserProps) => <MemberCard key={user.id} name={user.name} phone={user.phone} username={user.username} website={user.website} />);
  }

  return (
    <div className="App">
      <Tabs onChange={setTabForm}/>

      {!tabForm && mapper([...users, ...moreUsers])}

      {!tabForm && <Button label='нажми меня!' onClick={onButtonClick}>more users</Button>}

      {tabForm && <Form onUserAddition={handleUserAddition}  />}

      {addedUser && (
                <MemberCard
                    name={addedUser.name}
                    phone={addedUser.phone}
                    username={addedUser.username}
                    website={addedUser.website}
                />
            )}
    </div>
  );
}
