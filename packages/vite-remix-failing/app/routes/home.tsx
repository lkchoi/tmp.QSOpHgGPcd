import { UsersManagement, WorkOsWidgets } from '@workos-inc/widgets';

export default function App() {
  const authToken = 'jwt.doesnt.matter';

  return (
    <WorkOsWidgets>
      <UsersManagement authToken={authToken} />
    </WorkOsWidgets>
  )
}
