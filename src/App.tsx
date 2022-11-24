import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { defaultUser } from 'components/mock';
import { UserCard } from 'components/UserCard';


function App() {
  return (    
      <Container>
        <TheHeader/>
        <Search hasError onSubmit={()=>{}} />
        <UserCard
        {...defaultUser}
        />
      </Container>
  );
}

export default App;
