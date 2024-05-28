import "./style.scss";

type TProps = {
	onClick: () => void,
	children?: string,
	label?: string
}

export const Button = ({ onClick, children, label }: TProps) => {
	const text = <p style={{ marginRight: '5px' }}>{ label }</p>;

	return (
		<div>
			<div>{ label && text }</div>

			<button className="button" onClick={onClick}>{children}</button>
		</div>
	);
};
