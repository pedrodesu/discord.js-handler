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
  CloseEvent
} from 'discord.js';

import { GenericUtils } from './main';

export interface ChannelCreateEvent {
  event: 'channelCreate';
  listener: (utils: GenericUtils, channel: Channel) => Promise<void> | void;
}

export interface ChannelDeleteEvent {
  event: 'channelDelete';
  listener: (utils: GenericUtils, channel: Channel) => Promise<void> | void;
}

export interface ChannelPinsUpdateEvent {
  event: 'channelPinsUpdate';
  listener: (utils: GenericUtils, channel: Channel, time: Date) => Promise<void> | void;
}

export interface ChannelUpdateEvent {
  event: 'channelUpdate';
  listener: (utils: GenericUtils, oldChannel: Channel, newChannel: Channel) => Promise<void> | void;
}

export interface DebugEvent {
  event: 'debug';
  listener: (utils: GenericUtils, info: string) => Promise<void> | void;
}

export interface DisconnectEvent {
  event: 'disconnect';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface EmojiCreateEvent {
  event: 'emojiCreate';
  listener: (utils: GenericUtils, emoji: Emoji) => Promise<void> | void;
}

export interface EmojiDeleteEvent {
  event: 'emojiDelete';
  listener: (utils: GenericUtils, emoji: Emoji) => Promise<void> | void;
}

export interface EmojiUpdateEvent {
  event: 'emojiUpdate';
  listener: (utils: GenericUtils, oldEmoji: Emoji, newEmoji: Emoji) => Promise<void> | void;
}

export interface ErrorEvent {
  event: 'error';
  listener: (utils: GenericUtils, error: Error) => Promise<void> | void;
}

export interface GuildBanAddEvent {
  event: 'guildBanAdd';
  listener: (utils: GenericUtils, guild: Guild, user: User) => Promise<void> | void;
}

export interface GuildBanRemoveEvent {
  event: 'guildBanRemove';
  listener: (utils: GenericUtils, guild: Guild, user: User) => Promise<void> | void;
}

export interface GuildCreateEvent {
  event: 'guildCreate';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildDeleteEvent {
  event: 'guildDelete';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildMemberAddEvent {
  event: 'guildMemberAdd';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMemberAvailableEvent {
  event: 'guildMemberAvailable';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMemberRemoveEvent {
  event: 'guildMemberRemove';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMembersChunkEvent {
  event: 'guildMembersChunk';
  listener: (utils: GenericUtils, members: GuildMember[], guild: Guild) => Promise<void> | void;
}

export interface GuildMemberSpeakingEvent {
  event: 'guildMemberSpeaking';
  listener: (utils: GenericUtils, member: GuildMember, speaking: boolean) => Promise<void> | void;
}

export interface GuildMemberUpdateEvent {
  event: 'guildMemberUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface GuildUnavailableEvent {
  event: 'guildUnavailable';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildUpdateEvent {
  event: 'guildUpdate';
  listener: (utils: GenericUtils, oldGuild: Guild, newGuild: Guild) => Promise<void> | void;
}

export interface GuildIntegrationsUpdateEvent {
  event: 'guildIntegrationsUpdate';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface InvalidatedEvent {
  event: 'invalidated';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface InviteCreateEvent {
  event: 'inviteCreate';
  listener: (utils: GenericUtils, invite: Invite) => Promise<void> | void;
}

export interface InviteDeleteEvent {
  event: 'inviteDelete';
  listener: (utils: GenericUtils, invite: Invite) => Promise<void> | void;
}

export interface MessageEvent {
  event: 'message';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageDeleteEvent {
  event: 'messageDelete';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageDeleteBulkEvent {
  event: 'messageDeleteBulk';
  listener: (utils: GenericUtils, messages: Collection<Snowflake, Message>) => Promise<void> | void;
}

export interface MessageReactionAddEvent {
  event: 'messageReactionAdd';
  listener: (utils: GenericUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}

export interface MessageReactionRemoveEvent {
  event: 'messageReactionRemove';
  listener: (utils: GenericUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}

export interface MessageReactionRemoveAllEvent {
  event: 'messageReactionRemoveAll';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageReactionRemoveEmojiEvent {
  event: 'messageReactionRemoveEmoji';
  listener: (utils: GenericUtils, reaction: MessageReaction) => Promise<void> | void;
}

export interface MessageUpdateEvent {
  event: 'messageUpdate';
  listener: (utils: GenericUtils, oldMessage: Message, newMessage: Message) => Promise<void> | void;
}

export interface PresenceUpdateEvent {
  event: 'presenceUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface RateLimitEvent {
  event: 'rateLimit';
  listener: (utils: GenericUtils, rateLimitData: RateLimitData) => Promise<void> | void;
}

export interface ReadyEvent {
  event: 'ready';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface RoleCreateEvent {
  event: 'roleCreate';
  listener: (utils: GenericUtils, role: Role) => Promise<void> | void;
}

export interface RoleDeleteEvent {
  event: 'roleDelete';
  listener: (utils: GenericUtils, role: Role) => Promise<void> | void;
}

export interface RoleUpdateEvent {
  event: 'roleUpdate';
  listener: (utils: GenericUtils, oldRole: Role, newRole: Role) => Promise<void> | void;
}

export interface ShardDisconnectEvent {
  event: 'shardDisconnect';
  listener: (utils: GenericUtils, event: CloseEvent, id: number) => Promise<void> | void;
}

export interface ShardErrorEvent {
  event: 'shardError';
  listener: (utils: GenericUtils, error: Error, shardID: number) => Promise<void> | void;
}

export interface ShardReadyEvent {
  event: 'shardReady';
  listener: (utils: GenericUtils, id: number, unavailableGuilds?: Set<string>) => Promise<void> | void;
}

export interface ShardReconnectingEvent {
  event: 'shardReconnecting';
  listener: (utils: GenericUtils, id: number) => Promise<void> | void;
}

export interface ShardResumeEvent {
  event: 'shardResume';
  listener: (utils: GenericUtils, id: number, replayedEvents: number) => Promise<void> | void;
}

export interface TypingStartEvent {
  event: 'typingStart';
  listener: (utils: GenericUtils, channel: Channel, user: User) => Promise<void> | void;
}

export interface TypingStopEvent {
  event: 'typingStop';
  listener: (utils: GenericUtils, channel: Channel, user: User) => Promise<void> | void;
}

export interface UserUpdateEvent {
  event: 'userUpdate';
  listener: (utils: GenericUtils, oldUser: User, newUser: User) => Promise<void> | void;
}

export interface VoiceStateUpdateEvent {
  event: 'voiceStateUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface WarnEvent {
  event: 'warn';
  listener: (utils: GenericUtils, info: string) => Promise<void> | void;
}

export interface WebhookUpdateEvent {
  event: 'webhookUpdate';
  listener: (utils: GenericUtils, channel: TextChannel) => Promise<void> | void;
}

export interface GenericEvent {
  event: string;
  listener: (utils: GenericUtils, ...params: never[]) => Promise<void> | void;
}
