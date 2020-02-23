import { Channel, ClientUserGuildSettings, Emoji, ClientUserSettings, Guild, User, GuildMember, Message, Collection, Snowflake, MessageReaction, RateLimitInfo, Role, UserResolvable, TextChannel, Client } from 'discord.js';
import Handler from '../classes/handler';
interface EventUtils {
    client?: Client;
    handler?: Handler;
}
export interface ChannelCreateEvent {
    event: 'channelCreate';
    listener: (utils: EventUtils, channel: Channel) => Promise<void> | void;
}
export interface ChannelDeleteEvent {
    event: 'channelDelete';
    listener: (utils: EventUtils, channel: Channel) => Promise<void> | void;
}
export interface ChannelPinsUpdateEvent {
    event: 'channelPinsUpdate';
    listener: (utils: EventUtils, channel: Channel, time: Date) => Promise<void> | void;
}
export interface ChannelUpdateEvent {
    event: 'channelUpdate';
    listener: (utils: EventUtils, oldChannel: Channel, newChannel: Channel) => Promise<void> | void;
}
export interface ClientUserGuildSettingsUpdateEvent {
    event: 'clientUserGuildSettingsUpdate';
    listener: (utils: EventUtils, clientUserGuildSettings: ClientUserGuildSettings) => Promise<void> | void;
}
export interface ClientUserSettingsUpdateEvent {
    event: 'clientUserSettingsUpdate';
    listener: (utils: EventUtils, clientUserSettings: ClientUserSettings) => Promise<void> | void;
}
export interface DebugEvent {
    event: 'debug';
    listener: (utils: EventUtils, info: string) => Promise<void> | void;
}
export interface DisconnectEvent {
    event: 'disconnect';
    listener: (utils: EventUtils) => Promise<void> | void;
}
export interface EmojiCreateEvent {
    event: 'emojiCreate';
    listener: (utils: EventUtils, emoji: Emoji) => Promise<void> | void;
}
export interface EmojiDeleteEvent {
    event: 'emojiDelete';
    listener: (utils: EventUtils, emoji: Emoji) => Promise<void> | void;
}
export interface EmojiUpdateEvent {
    event: 'emojiUpdate';
    listener: (utils: EventUtils, oldEmoji: Emoji, newEmoji: Emoji) => Promise<void> | void;
}
export interface ErrorEvent {
    event: 'error';
    listener: (utils: EventUtils, error: Error) => Promise<void> | void;
}
export interface GuildBanAddEvent {
    event: 'guildBanAdd';
    listener: (utils: EventUtils, guild: Guild, user: User) => Promise<void> | void;
}
export interface GuildBanRemoveEvent {
    event: 'guildBanRemove';
    listener: (utils: EventUtils, guild: Guild, user: User) => Promise<void> | void;
}
export interface GuildCreateEvent {
    event: 'guildCreate';
    listener: (utils: EventUtils, guild: Guild) => Promise<void> | void;
}
export interface GuildDeleteEvent {
    event: 'guildDelete';
    listener: (utils: EventUtils, guild: Guild) => Promise<void> | void;
}
export interface GuildMemberAddEvent {
    event: 'guildMemberAdd';
    listener: (utils: EventUtils, member: GuildMember) => Promise<void> | void;
}
export interface GuildMemberAvailableEvent {
    event: 'guildMemberAvailable';
    listener: (utils: EventUtils, member: GuildMember) => Promise<void> | void;
}
export interface GuildMemberRemoveEvent {
    event: 'guildMemberRemove';
    listener: (utils: EventUtils, member: GuildMember) => Promise<void> | void;
}
export interface GuildMembersChunkEvent {
    event: 'guildMembersChunk';
    listener: (utils: EventUtils, members: GuildMember[], guild: Guild) => Promise<void> | void;
}
export interface GuildMemberSpeakingEvent {
    event: 'guildMemberSpeaking';
    listener: (utils: EventUtils, member: GuildMember, speaking: boolean) => Promise<void> | void;
}
export interface GuildMemberUpdateEvent {
    event: 'guildMemberUpdate';
    listener: (utils: EventUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}
export interface GuildUnavailableEvent {
    event: 'guildUnavailable';
    listener: (utils: EventUtils, guild: Guild) => Promise<void> | void;
}
export interface GuildUpdateEvent {
    event: 'guildUpdate';
    listener: (utils: EventUtils, oldGuild: Guild, newGuild: Guild) => Promise<void> | void;
}
export interface GuildIntegrationsUpdateEvent {
    event: 'guildIntegrationsUpdate';
    listener: (utils: EventUtils, guild: Guild) => Promise<void> | void;
}
export interface MessageEvent {
    event: 'message';
    listener: (utils: EventUtils, message: Message) => Promise<void> | void;
}
export interface MessageDeleteEvent {
    event: 'messageDelete';
    listener: (utils: EventUtils, message: Message) => Promise<void> | void;
}
export interface MessageDeleteBulkEvent {
    event: 'messageDeleteBulk';
    listener: (utils: EventUtils, messages: Collection<Snowflake, Message>) => Promise<void> | void;
}
export interface MessageReactionAddEvent {
    event: 'messageReactionAdd';
    listener: (utils: EventUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}
export interface MessageReactionRemoveEvent {
    event: 'messageReactionRemove';
    listener: (utils: EventUtils, messageReaction: MessageReaction, user: User) => Promise<void> | void;
}
export interface MessageReactionRemoveAllEvent {
    event: 'messageReactionRemoveAll';
    listener: (utils: EventUtils, message: Message) => Promise<void> | void;
}
export interface MessageUpdateEvent {
    event: 'messageUpdate';
    listener: (utils: EventUtils, oldMessage: Message, newMessage: Message) => Promise<void> | void;
}
export interface PresenceUpdateEvent {
    event: 'presenceUpdate';
    listener: (utils: EventUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}
export interface RateLimitEvent {
    event: 'rateLimit';
    listener: (utils: EventUtils, rateLimit: RateLimitInfo) => Promise<void> | void;
}
export interface ReadyEvent {
    event: 'ready';
    listener: (utils: EventUtils) => Promise<void> | void;
}
export interface ReconnectingEvent {
    event: 'reconnecting';
    listener: (utils: EventUtils) => Promise<void> | void;
}
export interface ResumeEvent {
    event: 'resume';
    listener: (utils: EventUtils, replayed: number) => Promise<void> | void;
}
export interface RoleCreateEvent {
    event: 'roleCreate';
    listener: (utils: EventUtils, role: Role) => Promise<void> | void;
}
export interface RoleDeleteEvent {
    event: 'roleDelete';
    listener: (utils: EventUtils, role: Role) => Promise<void> | void;
}
export interface RoleUpdateEvent {
    event: 'roleUpdate';
    listener: (utils: EventUtils, oldRole: Role, newRole: Role) => Promise<void> | void;
}
export interface TypingStartEvent {
    event: 'typingStart';
    listener: (utils: EventUtils, channel: Channel, user: User) => Promise<void> | void;
}
export interface TypingStopEvent {
    event: 'typingStop';
    listener: (utils: EventUtils, channel: Channel, user: User) => Promise<void> | void;
}
export interface UserNoteUpdateEvent {
    event: 'userNoteUpdate';
    listener: (utils: EventUtils, user: UserResolvable, oldNote: string, newNote: string) => Promise<void> | void;
}
export interface UserUpdateEvent {
    event: 'userUpdate';
    listener: (utils: EventUtils, oldUser: User, newUser: User) => Promise<void> | void;
}
export interface VoiceStateUpdateEvent {
    event: 'voiceStateUpdate';
    listener: (utils: EventUtils, oldMember: GuildMember, newMember: GuildMember) => Promise<void> | void;
}
export interface WarnEvent {
    event: 'warn';
    listener: (utils: EventUtils, info: string) => Promise<void> | void;
}
export interface WebhookUpdateEvent {
    event: 'webhookUpdate';
    listener: (utils: EventUtils, channel: TextChannel) => Promise<void> | void;
}
export interface GenericEvent {
    event: string;
    listener: (utils: EventUtils, ...params: any[]) => Promise<void> | void;
}
export {};
