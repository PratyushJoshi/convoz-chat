import { useAppSelector } from '../../lib/store';
import { selectChannels } from '../Channels/channelsSlice';
import ChatMessage from './ChatMessage';
import ChatMessageSkeleton from './ChatMessageSkeleton';

type Props = {
  channelId: string;
};

const MessagesView = ({ channelId }: Props) => {
  const channels = useAppSelector(selectChannels);

  const channel = channels.find((channel) => channel.id === channelId);

  if (!channel) {
    return (
      <div className="space-y-4 px-2 py-4">
        {Array.from({ length: 3 }, (_, i) => (
          <ChatMessageSkeleton key={i} />
        ))}
      </div>
    );
  }

  const { messages } = channel;

  return (
    <div className="space-y-4 px-2 py-4">
      {messages?.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MessagesView;
