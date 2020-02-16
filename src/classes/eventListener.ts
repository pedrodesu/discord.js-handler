import {
  ChannelCreateEvent,
  ChannelDeleteEvent,
  ChannelPinsUpdateEvent,
  ChannelUpdateEvent,
  ClientUserGuildSettingsUpdateEvent,
  ClientUserSettingsUpdateEvent,
  DebugEvent,
  DisconnectEvent,
  EmojiCreateEvent,
  EmojiDeleteEvent,
  EmojiUpdateEvent,
  GuildBanAddEvent,
  GuildBanRemoveEvent,
  GuildCreateEvent,
  GuildDeleteEvent,
  GuildMemberAddEvent,
  GuildMemberAvailableEvent,
  GuildMemberRemoveEvent,
  GuildMembersChunkEvent,
  GuildMemberSpeakingEvent,
  GuildMemberUpdateEvent,
  GuildUnavailableEvent,
  GuildUpdateEvent,
  GuildIntegrationsUpdateEvent,
  MessageDeleteEvent,
  MessageDeleteBulkEvent,
  MessageReactionAddEvent,
  MessageReactionRemoveEvent,
  MessageReactionRemoveAllEvent,
  MessageUpdateEvent,
  PresenceUpdateEvent,
  RateLimitEvent,
  ReadyEvent,
  ReconnectingEvent,
  ResumeEvent,
  RoleCreateEvent,
  RoleDeleteEvent,
  RoleUpdateEvent,
  TypingStartEvent,
  TypingStopEvent,
  UserNoteUpdateEvent,
  UserUpdateEvent,
  VoiceStateUpdateEvent,
  WarnEvent,
  WebhookUpdateEvent,
  GenericEvent,
  MessageEvent,
  ErrorEvent
} from '@interfaces/events';

// Define EventListener class
export default class EventListener {
  // Define its properties
  readonly event: GenericEvent['event'];
  readonly listener: GenericEvent['listener'];

  // Define all the events that exist (overloads)
  protected constructor({ event, listener }: ChannelCreateEvent);
  protected constructor({ event, listener }: ChannelDeleteEvent);
  protected constructor({ event, listener }: ChannelPinsUpdateEvent);
  protected constructor({ event, listener }: ChannelUpdateEvent);
  protected constructor({ event, listener }: ClientUserGuildSettingsUpdateEvent);
  protected constructor({ event, listener }: ClientUserSettingsUpdateEvent);
  protected constructor({ event, listener }: DebugEvent);
  protected constructor({ event, listener }: DisconnectEvent);
  protected constructor({ event, listener }: EmojiCreateEvent);
  protected constructor({ event, listener }: EmojiDeleteEvent);
  protected constructor({ event, listener }: EmojiUpdateEvent);
  protected constructor({ event, listener }: ErrorEvent);
  protected constructor({ event, listener }: GuildBanAddEvent);
  protected constructor({ event, listener }: GuildBanRemoveEvent);
  protected constructor({ event, listener }: GuildCreateEvent);
  protected constructor({ event, listener }: GuildDeleteEvent);
  protected constructor({ event, listener }: GuildMemberAddEvent);
  protected constructor({ event, listener }: GuildMemberAvailableEvent);
  protected constructor({ event, listener }: GuildMemberRemoveEvent);
  protected constructor({ event, listener }: GuildMembersChunkEvent);
  protected constructor({ event, listener }: GuildMemberSpeakingEvent);
  protected constructor({ event, listener }: GuildMemberUpdateEvent);
  protected constructor({ event, listener }: GuildUnavailableEvent);
  protected constructor({ event, listener }: GuildUpdateEvent);
  protected constructor({ event, listener }: GuildIntegrationsUpdateEvent);
  protected constructor({ event, listener }: MessageEvent);
  protected constructor({ event, listener }: MessageDeleteEvent);
  protected constructor({ event, listener }: MessageDeleteBulkEvent);
  protected constructor({ event, listener }: MessageReactionAddEvent);
  protected constructor({ event, listener }: MessageReactionRemoveEvent);
  protected constructor({ event, listener }: MessageReactionRemoveAllEvent);
  protected constructor({ event, listener }: MessageUpdateEvent);
  protected constructor({ event, listener }: PresenceUpdateEvent);
  protected constructor({ event, listener }: RateLimitEvent);
  protected constructor({ event, listener }: ReadyEvent);
  protected constructor({ event, listener }: ReconnectingEvent);
  protected constructor({ event, listener }: ResumeEvent);
  protected constructor({ event, listener }: RoleCreateEvent);
  protected constructor({ event, listener }: RoleDeleteEvent);
  protected constructor({ event, listener }: RoleUpdateEvent);
  protected constructor({ event, listener }: TypingStartEvent);
  protected constructor({ event, listener }: TypingStopEvent);
  protected constructor({ event, listener }: UserNoteUpdateEvent);
  protected constructor({ event, listener }: UserUpdateEvent);
  protected constructor({ event, listener }: VoiceStateUpdateEvent);
  protected constructor({ event, listener }: WarnEvent);
  protected constructor({ event, listener }: WebhookUpdateEvent);
  protected constructor({ event, listener }: GenericEvent);
  protected constructor({ event, listener }: WebhookUpdateEvent);
  protected constructor({ event, listener }: GenericEvent) {
    this.event = event;
    this.listener = listener;
  }
}
