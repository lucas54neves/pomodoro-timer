import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => (
  <HistoryContainer>
    <h1>History</h1>

    <HistoryList>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>2 hours ago</td>
            <td>
              <Status statuscolor="green">Concluded</Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>2 hours ago</td>
            <td>
              <Status statuscolor="yellow">In progress</Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>2 hours ago</td>
            <td>
              <Status statuscolor="red">Interrupted</Status>
            </td>
          </tr>
        </tbody>
      </table>
    </HistoryList>
  </HistoryContainer>
)
