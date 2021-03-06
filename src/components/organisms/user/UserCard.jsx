import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <dt>Mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0%;
  dt {
    float: left;
  }
  dd {
    padding-left: 48px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
