import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";
const user = {
  name: "AAA",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "hoge@mail.com",
  phone: "9999999999",
  company: {
    name: "Com Name"
  },
  website: "google.com"
};

export default function App() {
  return (
    <div>
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Test2</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
