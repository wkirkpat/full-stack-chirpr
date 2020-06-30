import * as React from "react";
import { Link } from "react-router-dom";

const AdminButton: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <>
      <Link to={`/${props.id}`}>
        <button className="btn btn-primary btn-small">Admin</button>
      </Link>
    </>
  );
}

interface IAppProps {
  id: string;
}

export default AdminButton;