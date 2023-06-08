// Дані
import user from './user/user.json';
import friends from './friendList/friends.json';
import data from './statisctics/data.json';
import transaction from './transactionHistory/transaction.json';

// Секції
import { User } from './user/User.jsx';
import { Statistics } from './statisctics/Statistics.jsx';
import { FriendList } from "./friendList/FriendList.jsx";
import { TransactionHistory } from './transactionHistory/TransactionHistory.jsx';



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <User
      // Відображення інформації про користувача з файлу .json
      // Передаємо властивості (props) до компонента.
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transaction}  />
    </div>
    
  );
};
