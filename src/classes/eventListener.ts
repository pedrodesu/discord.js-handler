import {
  GenericEvent,
  ChannelCreateEvent,
  ChannelDeleteEvent,
  ChannelPinsUpdateEvent,
  ChannelUpdateEvent,
  DebugEvent,
  DisconnectEvent,
  EmojiCreateEvent,
  EmojiDeleteEvent,
  EmojiUpdateEvent,
  ErrorEvent,
  GuildBanAddEvent,
  GuildBanRemoveEvent,
  GuildCreateEvent,
  GuildDeleteEvent,
  GuildIntegrationsUpdateEvent,
  GuildMemberAddEvent,
  GuildMemberAvailableEvent,
  GuildMemberRemoveEvent,
  GuildMembersChunkEvent,
  GuildMemberSpeakingEvent,
  GuildMemberUpdateEvent,
  GuildUnavailableEvent,
  GuildUpdateEvent,
  InvalidatedEvent,
  InviteCreateEvent,
  InviteDeleteEvent,
  MessageEvent,
  MessageDeleteEvent,
  MessageDeleteBulkEvent,
  MessageReactionAddEvent,
  MessageReactionRemoveEvent,
  MessageReactionRemoveAllEvent,
  MessageReactionRemoveEmojiEvent,
  MessageUpdateEvent,
  PresenceUpdateEvent,
  RateLimitEvent,
  ReadyEvent,
  RoleCreateEvent,
  RoleDeleteEvent,
  RoleUpdateEvent,
  ShardDisconnectEvent,
  ShardErrorEvent,
  ShardReadyEvent,
  ShardReconnectingEvent,
  ShardResumeEvent,
  TypingStartEvent,
  TypingStopEvent,
  UserUpdateEvent,
  VoiceStateUpdateEvent,
  WarnEvent,
  WebhookUpdateEvent
} from '../interfaces/events';

export default class EventListener {
  readonly event: GenericEvent['event'];
  readonly listener: GenericEvent['listener'];

  protected constructor(eventParameters: Pick<ChannelCreateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ChannelDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ChannelPinsUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ChannelUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<DebugEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<DisconnectEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<EmojiCreateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<EmojiDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<EmojiUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ErrorEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildBanAddEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildBanRemoveEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildCreateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMemberAddEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMemberAvailableEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMemberRemoveEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMembersChunkEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMemberSpeakingEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildMemberUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildUnavailableEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<InvalidatedEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<InviteCreateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<InviteDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GuildIntegrationsUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageDeleteBulkEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageReactionAddEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageReactionRemoveEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageReactionRemoveAllEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageReactionRemoveEmojiEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<MessageUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<PresenceUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<RateLimitEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ReadyEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<RoleCreateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<RoleDeleteEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<RoleUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ShardDisconnectEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ShardErrorEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ShardReadyEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ShardReconnectingEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<ShardResumeEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<TypingStartEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<TypingStopEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<UserUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<VoiceStateUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<WarnEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<WebhookUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GenericEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<WebhookUpdateEvent, 'event' | 'listener'>);
  protected constructor(eventParameters: Pick<GenericEvent, 'event' | 'listener'>) {
    Object.assign(this, eventParameters);
  }
}
