import React from 'react';
import faker from 'faker';

const seed = Math.floor(Math.random() * 20);
const messages = [];
for(let i = 0; i < seed; i++){
  messages.push({
    id: faker.random.uuid(),
    sender: faker.name.findName(),
    text: faker.random.words(),
    timestamp: faker.date.recent(seed).toString(),
  });
}

const MessageList = () => (
  <div>
    {messages.map(message => (
      <div key={message.id} className="message">
        <p><b>{ message.sender }</b></p>
        <p>{message.text}</p>
        <p><i>{message.timestamp}</i></p>
        <hr />
      </div>
    ))}
  </div>
);

export default MessageList;
