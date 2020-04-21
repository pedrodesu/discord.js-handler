import {
  Channel,
  Emoji,
  Guild,
  User,
  GuildMember,
  Message,
  Collection,
  Snowflake,
  MessageReaction,
  Role,
  TextChannel,
  Invite,
  RateLimitData,
  CloseEvent,
} from 'discord.js';

import { GenericUtils, CallbackType } from './main';

type ImportCommandsType = (prefix: string, message: Message) => Promise<void>;

type GenericEventName = string;
type GenericEventRunnable = (utils: GenericUtils, ...params: never[]) => CallbackType;

export abstract class GenericEvent<
  T extends GenericEventName = GenericEventName,
  U extends GenericEventRunnable = GenericEventRunnable
> {
  name: T;
  abstract listener: U;
}

type ChannelCreateEvent = GenericEvent<'channelCreate', (utils: GenericUtils, channel: Channel) => CallbackType>;
type ChannelDeleteEvent = GenericEvent<'channelDelete', (utils: GenericUtils, channel: Channel) => CallbackType>;
type ChannelPinsUpdateEvent = GenericEvent<
  'channelPinsUpdate',
  (utils: GenericUtils, channel: Channel, time: Date) => CallbackType
>;
type ChannelUpdateEvent = GenericEvent<
  'channelUpdate',
  (utils: GenericUtils, oldChannel: Channel, newChannel: Channel) => CallbackType
>;
type DebugEvent = GenericEvent<'debug', (utils: GenericUtils, info: string) => CallbackType>;
type DisconnectEvent = GenericEvent<'disconnect', (utils: GenericUtils) => CallbackType>;
type EmojiCreateEvent = GenericEvent<'emojiCreate', (utils: GenericUtils, emoji: Emoji) => CallbackType>;
type EmojiDeleteEvent = GenericEvent<'emojiDelete', (utils: GenericUtils, emoji: Emoji) => CallbackType>;
type EmojiUpdateEvent = GenericEvent<'emojiUpdate', (utils: GenericUtils, oldEmoji: Emoji, newEmoji: Emoji) => CallbackType>;
type ErrorEvent = GenericEvent<'error', (utils: GenericUtils, error: Error) => CallbackType>;
type GuildBanAddEvent = GenericEvent<'guildBanAdd', (utils: GenericUtils, guild: Guild, user: User) => CallbackType>;
type GuildBanRemoveEvent = GenericEvent<'guildBanRemove', (utils: GenericUtils, guild: Guild, user: User) => CallbackType>;
type GuildCreateEvent = GenericEvent<'guildCreate', (utils: GenericUtils, guild: Guild) => CallbackType>;
type GuildDeleteEvent = GenericEvent<'guildDelete', (utils: GenericUtils, guild: Guild) => CallbackType>;
type GuildMemberAddEvent = GenericEvent<'guildMemberAdd', (utils: GenericUtils, member: GuildMember) => CallbackType>;
type GuildMemberAvailableEvent = GenericEvent<
  'guildMemberAvailable',
  (utils: GenericUtils, member: GuildMember) => CallbackType
>;
type GuildMemberRemoveEvent = GenericEvent<'guildMemberRemove', (utils: GenericUtils, member: GuildMember) => CallbackType>;
type GuildMembersChunkEvent = GenericEvent<
  'guildMembersChunk',
  (utils: GenericUtils, members: GuildMember[], guild: Guild) => CallbackType
>;
type GuildMemberSpeakingEvent = GenericEvent<
  'guildMemberSpeaking',
  (utils: GenericUtils, member: GuildMember, speaking: boolean) => CallbackType
>;
type GuildMemberUpdateEvent = GenericEvent<
  'guildMemberUpdate',
  (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => CallbackType
>;
type GuildUnavailableEvent = GenericEvent<'guildUnavailable', (utils: GenericUtils, guild: Guild) => CallbackType>;
type GuildUpdateEvent = GenericEvent<'guildUpdate', (utils: GenericUtils, oldGuild: Guild, newGuild: Guild) => CallbackType>;
type GuildIntegrationsUpdateEvent = GenericEvent<
  'guildIntegrationsUpdate',
  (utils: GenericUtils, guild: Guild) => CallbackType
>;
type InvalidatedEvent = GenericEvent<'invalidated', (utils: GenericUtils) => CallbackType>;
type InviteCreateEvent = GenericEvent<'inviteCreate', (utils: GenericUtils, invite: Invite) => CallbackType>;
type InviteDeleteEvent = GenericEvent<'inviteDelete', (utils: GenericUtils, invite: Invite) => CallbackType>;
type MessageEvent = GenericEvent<
  'message',
  (utils: GenericUtils, importCommands: ImportCommandsType, message: Message) => CallbackType
>;
type MessageDeleteEvent = GenericEvent<'messageDelete', (utils: GenericUtils, message: Message) => CallbackType>;
type MessageDeleteBulkEvent = GenericEvent<
  'messageDeleteBulk',
  (utils: GenericUtils, messages: Collection<Snowflake, Message>) => CallbackType
>;
type MessageReactionAddEvent = GenericEvent<
  'messageReactionAdd',
  (utils: GenericUtils, messageReaction: MessageReaction, user: User) => CallbackType
>;
type MessageReactionRemoveEvent = GenericEvent<
  'messageReactionRemove',
  (utils: GenericUtils, messageReaction: MessageReaction, user: User) => CallbackType
>;
type MessageReactionRemoveAllEvent = GenericEvent<
  'messageReactionRemoveAll',
  (utils: GenericUtils, message: Message) => CallbackType
>;
type MessageReactionRemoveEmojiEvent = GenericEvent<
  'messageReactionRemoveEmoji',
  (utils: GenericUtils, reaction: MessageReaction) => CallbackType
>;
type MessageUpdateEvent = GenericEvent<
  'messageUpdate',
  (utils: GenericUtils, oldMessage: Message, newMessage: Message) => CallbackType
>;
type PresenceUpdateEvent = GenericEvent<
  'presenceUpdate',
  (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => CallbackType
>;
type RateLimitEvent = GenericEvent<'rateLimit', (utils: GenericUtils, rateLimitData: RateLimitData) => CallbackType>;
export type ReadyEvent = GenericEvent<'ready', (utils: GenericUtils) => CallbackType>;
type RoleCreateEvent = GenericEvent<'roleCreate', (utils: GenericUtils, role: Role) => CallbackType>;
type RoleDeleteEvent = GenericEvent<'roleDelete', (utils: GenericUtils, role: Role) => CallbackType>;
type RoleUpdateEvent = GenericEvent<'roleUpdate', (utils: GenericUtils, oldRole: Role, newRole: Role) => CallbackType>;
type ShardDisconnectEvent = GenericEvent<
  'shardDisconnect',
  (utils: GenericUtils, event: CloseEvent, id: number) => CallbackType
>;
type ShardErrorEvent = GenericEvent<'shardError', (utils: GenericUtils, error: Error, shardID: number) => CallbackType>;
type ShardReadyEvent = GenericEvent<
  'shardReady',
  (utils: GenericUtils, id: number, unavailableGuilds?: Set<string>) => CallbackType
>;
type ShardReconnectingEvent = GenericEvent<'shardReconnecting', (utils: GenericUtils, id: number) => CallbackType>;
type ShardResumeEvent = GenericEvent<
  'shardResume',
  (utils: GenericUtils, id: number, replayedEvents: number) => CallbackType
>;
type TypingStartEvent = GenericEvent<'typingStart', (utils: GenericUtils, channel: Channel, user: User) => CallbackType>;
type UserUpdateEvent = GenericEvent<'userUpdate', (utils: GenericUtils, oldUser: User, newUser: User) => CallbackType>;
type VoiceStateUpdateEvent = GenericEvent<
  'voiceStateUpdate',
  (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => CallbackType
>;
type WarnEvent = GenericEvent<'warn', (utils: GenericUtils, info: string) => CallbackType>;
type WebhookUpdateEvent = GenericEvent<'webhookUpdate', (utils: GenericUtils, channel: TextChannel) => CallbackType>;

export type EventTypes =
  | ChannelCreateEvent
  | ChannelDeleteEvent
  | ChannelPinsUpdateEvent
  | ChannelUpdateEvent
  | DebugEvent
  | DisconnectEvent
  | EmojiCreateEvent
  | EmojiDeleteEvent
  | EmojiUpdateEvent
  | ErrorEvent
  | GuildBanAddEvent
  | GuildBanRemoveEvent
  | GuildCreateEvent
  | GuildDeleteEvent
  | GuildMemberAddEvent
  | GuildMemberAvailableEvent
  | GuildMemberRemoveEvent
  | GuildMembersChunkEvent
  | GuildMemberSpeakingEvent
  | GuildMemberUpdateEvent
  | GuildUnavailableEvent
  | GuildUpdateEvent
  | InvalidatedEvent
  | InviteCreateEvent
  | InviteDeleteEvent
  | GuildIntegrationsUpdateEvent
  | MessageEvent
  | MessageDeleteEvent
  | MessageDeleteBulkEvent
  | MessageReactionAddEvent
  | MessageReactionRemoveEvent
  | MessageReactionRemoveAllEvent
  | MessageReactionRemoveEmojiEvent
  | MessageUpdateEvent
  | PresenceUpdateEvent
  | RateLimitEvent
  | ReadyEvent
  | RoleCreateEvent
  | RoleDeleteEvent
  | RoleUpdateEvent
  | ShardDisconnectEvent
  | ShardErrorEvent
  | ShardReadyEvent
  | ShardReconnectingEvent
  | ShardResumeEvent
  | TypingStartEvent
  | UserUpdateEvent
  | VoiceStateUpdateEvent
  | WarnEvent
  | WebhookUpdateEvent;
