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

export interface GenericEvent {
  event: string;
  listener: (utils: GenericUtils, ...params: never[]) => Promise<void> | void;
}

export interface ChannelCreateEvent extends GenericEvent {
  event: 'channelCreate';
  listener: (utils: GenericUtils, channel: Channel) => Promise<void> | void;
}

export interface ChannelDeleteEvent extends GenericEvent {
  event: 'channelDelete';
  listener: (utils: GenericUtils, channel: Channel) => Promise<void> | void;
}

export interface ChannelPinsUpdateEvent extends GenericEvent {
  event: 'channelPinsUpdate';
  listener: (utils: GenericUtils, channel: Channel, time: Date) => Promise<void> | void;
}

export interface ChannelUpdateEvent extends GenericEvent {
  event: 'channelUpdate';
  listener: (utils: GenericUtils, oldChannel: Channel, newChannel: Channel) => Promise<void> | void;
}

export interface DebugEvent extends GenericEvent {
  event: 'debug';
  listener: (utils: GenericUtils, info: string) => Promise<void> | void;
}

export interface DisconnectEvent extends GenericEvent {
  event: 'disconnect';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface EmojiCreateEvent extends GenericEvent {
  event: 'emojiCreate';
  listener: (utils: GenericUtils, emoji: Emoji) => Promise<void> | void;
}

export interface EmojiDeleteEvent extends GenericEvent {
  event: 'emojiDelete';
  listener: (utils: GenericUtils, emoji: Emoji) => Promise<void> | void;
}

export interface EmojiUpdateEvent extends GenericEvent {
  event: 'emojiUpdate';
  listener: (utils: GenericUtils, oldEmoji: Emoji, newEmoji: Emoji) => Promise<void> | void;
}

export interface ErrorEvent extends GenericEvent {
  event: 'error';
  listener: (utils: GenericUtils, error: Error) => Promise<void> | void;
}

export interface GuildBanAddEvent extends GenericEvent {
  event: 'guildBanAdd';
  listener: (utils: GenericUtils, guild: Guild, user: User) => Promise<void> | void;
}

export interface GuildBanRemoveEvent extends GenericEvent {
  event: 'guildBanRemove';
  listener: (utils: GenericUtils, guild: Guild, user: User) => Promise<void> | void;
}

export interface GuildCreateEvent extends GenericEvent {
  event: 'guildCreate';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildDeleteEvent extends GenericEvent {
  event: 'guildDelete';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildMemberAddEvent extends GenericEvent {
  event: 'guildMemberAdd';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMemberAvailableEvent extends GenericEvent {
  event: 'guildMemberAvailable';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMemberRemoveEvent extends GenericEvent {
  event: 'guildMemberRemove';
  listener: (utils: GenericUtils, member: GuildMember) => Promise<void> | void;
}

export interface GuildMembersChunkEvent extends GenericEvent {
  event: 'guildMembersChunk';
  listener: (utils: GenericUtils, members: GuildMember[], guild: Guild) => Promise<void> | void;
}

export interface GuildMemberSpeakingEvent extends GenericEvent {
  event: 'guildMemberSpeaking';
  listener: (utils: GenericUtils, member: GuildMember, speaking: boolean) => Promise<void> | void;
}

export interface GuildMemberUpdateEvent extends GenericEvent {
  event: 'guildMemberUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface GuildUnavailableEvent extends GenericEvent {
  event: 'guildUnavailable';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface GuildUpdateEvent extends GenericEvent {
  event: 'guildUpdate';
  listener: (utils: GenericUtils, oldGuild: Guild, newGuild: Guild) => Promise<void> | void;
}

export interface GuildIntegrationsUpdateEvent extends GenericEvent {
  event: 'guildIntegrationsUpdate';
  listener: (utils: GenericUtils, guild: Guild) => Promise<void> | void;
}

export interface InvalidatedEvent extends GenericEvent {
  event: 'invalidated';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface InviteCreateEvent extends GenericEvent {
  event: 'inviteCreate';
  listener: (utils: GenericUtils, invite: Invite) => Promise<void> | void;
}

export interface InviteDeleteEvent extends GenericEvent {
  event: 'inviteDelete';
  listener: (utils: GenericUtils, invite: Invite) => Promise<void> | void;
}

export interface MessageEvent extends GenericEvent {
  event: 'message';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageDeleteEvent extends GenericEvent {
  event: 'messageDelete';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageDeleteBulkEvent extends GenericEvent {
  event: 'messageDeleteBulk';
  listener: (utils: GenericUtils, messages: Collection<Snowflake, Message>) => Promise<void> | void;
}

export interface MessageReactionAddEvent extends GenericEvent {
  event: 'messageReactionAdd';
  listener: (utils: GenericUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}

export interface MessageReactionRemoveEvent extends GenericEvent {
  event: 'messageReactionRemove';
  listener: (utils: GenericUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}

export interface MessageReactionRemoveAllEvent extends GenericEvent {
  event: 'messageReactionRemoveAll';
  listener: (utils: GenericUtils, message: Message) => Promise<void> | void;
}

export interface MessageReactionRemoveEmojiEvent extends GenericEvent {
  event: 'messageReactionRemoveEmoji';
  listener: (utils: GenericUtils, reaction: MessageReaction) => Promise<void> | void;
}

export interface MessageUpdateEvent extends GenericEvent {
  event: 'messageUpdate';
  listener: (utils: GenericUtils, oldMessage: Message, newMessage: Message) => Promise<void> | void;
}

export interface PresenceUpdateEvent extends GenericEvent {
  event: 'presenceUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface RateLimitEvent extends GenericEvent {
  event: 'rateLimit';
  listener: (utils: GenericUtils, rateLimitData: RateLimitData) => Promise<void> | void;
}

export interface ReadyEvent extends GenericEvent {
  event: 'ready';
  listener: (utils: GenericUtils) => Promise<void> | void;
}

export interface RoleCreateEvent extends GenericEvent {
  event: 'roleCreate';
  listener: (utils: GenericUtils, role: Role) => Promise<void> | void;
}

export interface RoleDeleteEvent extends GenericEvent {
  event: 'roleDelete';
  listener: (utils: GenericUtils, role: Role) => Promise<void> | void;
}

export interface RoleUpdateEvent extends GenericEvent {
  event: 'roleUpdate';
  listener: (utils: GenericUtils, oldRole: Role, newRole: Role) => Promise<void> | void;
}

export interface ShardDisconnectEvent extends GenericEvent {
  event: 'shardDisconnect';
  listener: (utils: GenericUtils, event: CloseEvent, id: number) => Promise<void> | void;
}

export interface ShardErrorEvent extends GenericEvent {
  event: 'shardError';
  listener: (utils: GenericUtils, error: Error, shardID: number) => Promise<void> | void;
}

export interface ShardReadyEvent extends GenericEvent {
  event: 'shardReady';
  listener: (utils: GenericUtils, id: number, unavailableGuilds?: Set<string>) => Promise<void> | void;
}

export interface ShardReconnectingEvent extends GenericEvent {
  event: 'shardReconnecting';
  listener: (utils: GenericUtils, id: number) => Promise<void> | void;
}

export interface ShardResumeEvent extends GenericEvent {
  event: 'shardResume';
  listener: (utils: GenericUtils, id: number, replayedEvents: number) => Promise<void> | void;
}

export interface TypingStartEvent extends GenericEvent {
  event: 'typingStart';
  listener: (utils: GenericUtils, channel: Channel, user: User) => Promise<void> | void;
}

export interface TypingStopEvent extends GenericEvent {
  event: 'typingStop';
  listener: (utils: GenericUtils, channel: Channel, user: User) => Promise<void> | void;
}

export interface UserUpdateEvent extends GenericEvent {
  event: 'userUpdate';
  listener: (utils: GenericUtils, oldUser: User, newUser: User) => Promise<void> | void;
}

export interface VoiceStateUpdateEvent extends GenericEvent {
  event: 'voiceStateUpdate';
  listener: (utils: GenericUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}

export interface WarnEvent extends GenericEvent {
  event: 'warn';
  listener: (utils: GenericUtils, info: string) => Promise<void> | void;
}

export interface WebhookUpdateEvent extends GenericEvent {
  event: 'webhookUpdate';
  listener: (utils: GenericUtils, channel: TextChannel) => Promise<void> | void;
}
