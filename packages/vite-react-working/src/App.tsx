import { UsersManagement, WorkOsWidgets } from '@workos-inc/widgets';
import { Container } from '@radix-ui/themes';

function App() {
  const authToken = __WORKOS_JWT__;

  return (
    <Container size="1">
      <WorkOsWidgets>
        <UsersManagement authToken={authToken} />
      </WorkOsWidgets>
    </Container>
  )
}

export default App
