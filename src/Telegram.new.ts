export default Telegram
namespace Telegram {
  type VoiceChatStarted = any

  /**
   * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
   * @url https://core.telegram.org/bots/api#chatmember
   */
  type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned

  /**
   * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
   * @url https://core.telegram.org/bots/api#botcommandscope
   */
  type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember

  /**
   * This object represents the content of a media message to be sent. It should be one of
   * @url https://core.telegram.org/bots/api#inputmedia
   */
  type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo

  /**
   * This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
   * @url https://core.telegram.org/bots/api#inlinequeryresult
   */
  type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice

  /**
   * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
   * @url https://core.telegram.org/bots/api#inputmessagecontent
   */
  type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent

  /**
   * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
   * @url https://core.telegram.org/bots/api#passportelementerror
   */
  type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified

  /**
   * This object represents an incoming update.At most one of the optional parameters can be present in any given update.
   * @url https://core.telegram.org/bots/api#update
   */
  export interface Update {
    /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: number
    /** New incoming message of any kind — text, photo, sticker, etc. */
    message?: Message
    /** New version of a message that is known to the bot and was edited */
    edited_message?: Message
    /** New incoming channel post of any kind — text, photo, sticker, etc. */
    channel_post?: Message
    /** New version of a channel post that is known to the bot and was edited */
    edited_channel_post?: Message
    /** New incoming inline query */
    inline_query?: InlineQuery
    /** The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    chosen_inline_result?: ChosenInlineResult
    /** New incoming callback query */
    callback_query?: CallbackQuery
    /** New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: ShippingQuery
    /** New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: PreCheckoutQuery
    /** New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll?: Poll
    /** A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    poll_answer?: PollAnswer
    /** The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    my_chat_member?: ChatMemberUpdated
    /** A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates. */
    chat_member?: ChatMemberUpdated
  }
  /**
   * Contains information about the current status of a webhook.
   * @url https://core.telegram.org/bots/api#webhookinfo
   */
  export interface WebhookInfo {
    /** Webhook URL, may be empty if webhook is not set up */
    url: string
    /** True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: boolean
    /** Number of updates awaiting delivery */
    pending_update_count: number
    /** Currently used webhook IP address */
    ip_address?: string
    /** Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: number
    /** Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: string
    /** Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connections?: number
    /** A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
    allowed_updates?: string[]
  }
  /**
   * This object represents a Telegram user or bot.
   * @url https://core.telegram.org/bots/api#user
   */
  export interface User {
    /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number
    /** True, if this user is a bot */
    is_bot: boolean
    /** User's or bot's first name */
    first_name: string
    /** User's or bot's last name */
    last_name?: string
    /** User's or bot's username */
    username?: string
    /** IETF language tag of the user's language */
    language_code?: string
    /** True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups?: boolean
    /** True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages?: boolean
    /** True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries?: boolean
  }
  /**
   * This object represents a chat.
   * @url https://core.telegram.org/bots/api#chat
   */
  export interface Chat {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number
    /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: string
    /** Title, for supergroups, channels and group chats */
    title?: string
    /** Username, for private chats, supergroups and channels if available */
    username?: string
    /** First name of the other party in a private chat */
    first_name?: string
    /** Last name of the other party in a private chat */
    last_name?: string
    /** Chat photo. Returned only in getChat. */
    photo?: ChatPhoto
    /** Bio of the other party in a private chat. Returned only in getChat. */
    bio?: string
    /** Description, for groups, supergroups and channel chats. Returned only in getChat. */
    description?: string
    /** Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
    invite_link?: string
    /** The most recent pinned message (by sending date). Returned only in getChat. */
    pinned_message?: Message
    /** Default chat member permissions, for groups and supergroups. Returned only in getChat. */
    permissions?: ChatPermissions
    /** For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in getChat. */
    slow_mode_delay?: number
    /** The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
    message_auto_delete_time?: number
    /** For supergroups, name of group sticker set. Returned only in getChat. */
    sticker_set_name?: string
    /** True, if the bot can change the group sticker set. Returned only in getChat. */
    can_set_sticker_set?: boolean
    /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
    linked_chat_id?: number
    /** For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
    location?: ChatLocation
  }
  /**
   * This object represents a message.
   * @url https://core.telegram.org/bots/api#message
   */
  export interface Message {
    /** Unique message identifier inside this chat */
    message_id: number
    /** Sender, empty for messages sent to channels */
    from?: User
    /** Sender of the message, sent on behalf of a chat. The channel itself for channel messages. The supergroup itself for messages from anonymous group administrators. The linked channel for messages automatically forwarded to the discussion group */
    sender_chat?: Chat
    /** Date the message was sent in Unix time */
    date: number
    /** Conversation the message belongs to */
    chat: Chat
    /** For forwarded messages, sender of the original message */
    forward_from?: User
    /** For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
    forward_from_chat?: Chat
    /** For messages forwarded from channels, identifier of the original message in the channel */
    forward_from_message_id?: number
    /** For messages forwarded from channels, signature of the post author if present */
    forward_signature?: string
    /** Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_sender_name?: string
    /** For forwarded messages, date the original message was sent in Unix time */
    forward_date?: number
    /** For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message?: Message
    /** Bot through which the message was sent */
    via_bot?: User
    /** Date the message was last edited in Unix time */
    edit_date?: number
    /** The unique identifier of a media message group this message belongs to */
    media_group_id?: string
    /** Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature?: string
    /** For text messages, the actual UTF-8 text of the message, 0-4096 characters */
    text?: string
    /** For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: MessageEntity[]
    /** Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation?: Animation
    /** Message is an audio file, information about the file */
    audio?: Audio
    /** Message is a general file, information about the file */
    document?: Document
    /** Message is a photo, available sizes of the photo */
    photo?: PhotoSize[]
    /** Message is a sticker, information about the sticker */
    sticker?: Sticker
    /** Message is a video, information about the video */
    video?: Video
    /** Message is a video note, information about the video message */
    video_note?: VideoNote
    /** Message is a voice message, information about the file */
    voice?: Voice
    /** Caption for the animation, audio, document, photo, video or voice, 0-1024 characters */
    caption?: string
    /** For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: MessageEntity[]
    /** Message is a shared contact, information about the contact */
    contact?: Contact
    /** Message is a dice with random value */
    dice?: Dice
    /** Message is a game, information about the game. More about games » */
    game?: Game
    /** Message is a native poll, information about the poll */
    poll?: Poll
    /** Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue?: Venue
    /** Message is a shared location, information about the location */
    location?: Location
    /** New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: User[]
    /** A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: User
    /** A chat title was changed to this value */
    new_chat_title?: string
    /** A chat photo was change to this value */
    new_chat_photo?: PhotoSize[]
    /** Service message: the chat photo was deleted */
    delete_chat_photo?: true
    /** Service message: the group has been created */
    group_chat_created?: true
    /** Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: true
    /** Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: true
    /** Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged
    /** The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: number
    /** The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: number
    /** Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
    pinned_message?: Message
    /** Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice?: Invoice
    /** Message is a service message about a successful payment, information about the payment. More about payments » */
    successful_payment?: SuccessfulPayment
    /** The domain name of the website on which the user has logged in. More about Telegram Login » */
    connected_website?: string
    /** Telegram Passport data */
    passport_data?: PassportData
    /** Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered?: ProximityAlertTriggered
    /** Service message: voice chat scheduled */
    voice_chat_scheduled?: VoiceChatScheduled
    /** Service message: voice chat started */
    voice_chat_started?: VoiceChatStarted
    /** Service message: voice chat ended */
    voice_chat_ended?: VoiceChatEnded
    /** Service message: new participants invited to a voice chat */
    voice_chat_participants_invited?: VoiceChatParticipantsInvited
    /** Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup?: InlineKeyboardMarkup
  }
  /**
   * This object represents a unique message identifier.
   * @url https://core.telegram.org/bots/api#messageid
   */
  export interface MessageId {
    /** Unique message identifier */
    message_id: number
  }
  /**
   * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
   * @url https://core.telegram.org/bots/api#messageentity
   */
  export interface MessageEntity {
    /** Type of the entity. Can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames) */
    type: string
    /** Offset in UTF-16 code units to the start of the entity */
    offset: number
    /** Length of the entity in UTF-16 code units */
    length: number
    /** For “text_link” only, url that will be opened after user taps on the text */
    url?: string
    /** For “text_mention” only, the mentioned user */
    user?: User
    /** For “pre” only, the programming language of the entity text */
    language?: string
  }
  /**
   * This object represents one size of a photo or a file / sticker thumbnail.
   * @url https://core.telegram.org/bots/api#photosize
   */
  export interface PhotoSize {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Photo width */
    width: number
    /** Photo height */
    height: number
    /** File size */
    file_size?: number
  }
  /**
   * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
   * @url https://core.telegram.org/bots/api#animation
   */
  export interface Animation {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Video width as defined by sender */
    width: number
    /** Video height as defined by sender */
    height: number
    /** Duration of the video in seconds as defined by sender */
    duration: number
    /** Animation thumbnail as defined by sender */
    thumb?: PhotoSize
    /** Original animation filename as defined by sender */
    file_name?: string
    /** MIME type of the file as defined by sender */
    mime_type?: string
    /** File size */
    file_size?: number
  }
  /**
   * This object represents an audio file to be treated as music by the Telegram clients.
   * @url https://core.telegram.org/bots/api#audio
   */
  export interface Audio {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Duration of the audio in seconds as defined by sender */
    duration: number
    /** Performer of the audio as defined by sender or by audio tags */
    performer?: string
    /** Title of the audio as defined by sender or by audio tags */
    title?: string
    /** Original filename as defined by sender */
    file_name?: string
    /** MIME type of the file as defined by sender */
    mime_type?: string
    /** File size */
    file_size?: number
    /** Thumbnail of the album cover to which the music file belongs */
    thumb?: PhotoSize
  }
  /**
   * This object represents a general file (as opposed to photos, voice messages and audio files).
   * @url https://core.telegram.org/bots/api#document
   */
  export interface Document {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Document thumbnail as defined by sender */
    thumb?: PhotoSize
    /** Original filename as defined by sender */
    file_name?: string
    /** MIME type of the file as defined by sender */
    mime_type?: string
    /** File size */
    file_size?: number
  }
  /**
   * This object represents a video file.
   * @url https://core.telegram.org/bots/api#video
   */
  export interface Video {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Video width as defined by sender */
    width: number
    /** Video height as defined by sender */
    height: number
    /** Duration of the video in seconds as defined by sender */
    duration: number
    /** Video thumbnail */
    thumb?: PhotoSize
    /** Original filename as defined by sender */
    file_name?: string
    /** Mime type of a file as defined by sender */
    mime_type?: string
    /** File size */
    file_size?: number
  }
  /**
   * This object represents a video message (available in Telegram apps as of v.4.0).
   * @url https://core.telegram.org/bots/api#videonote
   */
  export interface VideoNote {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Video width and height (diameter of the video message) as defined by sender */
    length: number
    /** Duration of the video in seconds as defined by sender */
    duration: number
    /** Video thumbnail */
    thumb?: PhotoSize
    /** File size */
    file_size?: number
  }
  /**
   * This object represents a voice note.
   * @url https://core.telegram.org/bots/api#voice
   */
  export interface Voice {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Duration of the audio in seconds as defined by sender */
    duration: number
    /** MIME type of the file as defined by sender */
    mime_type?: string
    /** File size */
    file_size?: number
  }
  /**
   * This object represents a phone contact.
   * @url https://core.telegram.org/bots/api#contact
   */
  export interface Contact {
    /** Contact's phone number */
    phone_number: string
    /** Contact's first name */
    first_name: string
    /** Contact's last name */
    last_name?: string
    /** Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id?: number
    /** Additional data about the contact in the form of a vCard */
    vcard?: string
  }
  /**
   * This object represents an animated emoji that displays a random value.
   * @url https://core.telegram.org/bots/api#dice
   */
  export interface Dice {
    /** Emoji on which the dice throw animation is based */
    emoji: string
    /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
    value: number
  }
  /**
   * This object contains information about one answer option in a poll.
   * @url https://core.telegram.org/bots/api#polloption
   */
  export interface PollOption {
    /** Option text, 1-100 characters */
    text: string
    /** Number of users that voted for this option */
    voter_count: number
  }
  /**
   * This object represents an answer of a user in a non-anonymous poll.
   * @url https://core.telegram.org/bots/api#pollanswer
   */
  export interface PollAnswer {
    /** Unique poll identifier */
    poll_id: string
    /** The user, who changed the answer to the poll */
    user: User
    /** 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
    option_ids: number[]
  }
  /**
   * This object contains information about a poll.
   * @url https://core.telegram.org/bots/api#poll
   */
  export interface Poll {
    /** Unique poll identifier */
    id: string
    /** Poll question, 1-300 characters */
    question: string
    /** List of poll options */
    options: PollOption[]
    /** Total number of users that voted in the poll */
    total_voter_count: number
    /** True, if the poll is closed */
    is_closed: boolean
    /** True, if the poll is anonymous */
    is_anonymous: boolean
    /** Poll type, currently can be “regular” or “quiz” */
    type: string
    /** True, if the poll allows multiple answers */
    allows_multiple_answers: boolean
    /** 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id?: number
    /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation?: string
    /** Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities?: MessageEntity[]
    /** Amount of time in seconds the poll will be active after creation */
    open_period?: number
    /** Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date?: number
  }
  /**
   * This object represents a point on the map.
   * @url https://core.telegram.org/bots/api#location
   */
  export interface Location {
    /** Longitude as defined by sender */
    longitude: number
    /** Latitude as defined by sender */
    latitude: number
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: number
    /** Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only. */
    live_period?: number
    /** The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading?: number
    /** Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius?: number
  }
  /**
   * This object represents a venue.
   * @url https://core.telegram.org/bots/api#venue
   */
  export interface Venue {
    /** Venue location. Can't be a live location */
    location: Location
    /** Name of the venue */
    title: string
    /** Address of the venue */
    address: string
    /** Foursquare identifier of the venue */
    foursquare_id?: string
    /** Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string
    /** Google Places identifier of the venue */
    google_place_id?: string
    /** Google Places type of the venue. (See supported types.) */
    google_place_type?: string
  }
  /**
   * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
   * @url https://core.telegram.org/bots/api#proximityalerttriggered
   */
  export interface ProximityAlertTriggered {
    /** User that triggered the alert */
    traveler: User
    /** User that set the alert */
    watcher: User
    /** The distance between the users */
    distance: number
  }
  /**
   * This object represents a service message about a change in auto-delete timer settings.
   * @url https://core.telegram.org/bots/api#messageautodeletetimerchanged
   */
  export interface MessageAutoDeleteTimerChanged {
    /** New auto-delete time for messages in the chat */
    message_auto_delete_time: number
  }
  /**
   * This object represents a service message about a voice chat scheduled in the chat.
   * @url https://core.telegram.org/bots/api#voicechatscheduled
   */
  export interface VoiceChatScheduled {
    /** Point in time (Unix timestamp) when the voice chat is supposed to be started by a chat administrator */
    start_date: number
  }
  /**
   * This object represents a service message about a voice chat ended in the chat.
   * @url https://core.telegram.org/bots/api#voicechatended
   */
  export interface VoiceChatEnded {
    /** Voice chat duration; in seconds */
    duration: number
  }
  /**
   * This object represents a service message about new members invited to a voice chat.
   * @url https://core.telegram.org/bots/api#voicechatparticipantsinvited
   */
  export interface VoiceChatParticipantsInvited {
    /** New members that were invited to the voice chat */
    users?: User[]
  }
  /**
   * This object represent a user's profile pictures.
   * @url https://core.telegram.org/bots/api#userprofilephotos
   */
  export interface UserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: number
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: PhotoSize[][]
  }
  /**
   * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
   * @url https://core.telegram.org/bots/api#file
   */
  export interface File {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** File size, if known */
    file_size?: number
    /** File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path?: string
  }
  /**
   * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
   * @url https://core.telegram.org/bots/api#replykeyboardmarkup
   */
  export interface ReplyKeyboardMarkup {
    /** Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: KeyboardButton[][]
    /** Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: boolean
    /** Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard?: boolean
    /** The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder?: string
    /** Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
    selective?: boolean
  }
  /**
   * This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
   * @url https://core.telegram.org/bots/api#keyboardbutton
   */
  export interface KeyboardButton {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: string
    /** If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only */
    request_contact?: boolean
    /** If True, the user's current location will be sent when the button is pressed. Available in private chats only */
    request_location?: boolean
    /** If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only */
    request_poll?: KeyboardButtonPollType
  }
  /**
   * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
   * @url https://core.telegram.org/bots/api#keyboardbuttonpolltype
   */
  export interface KeyboardButtonPollType {
    /** If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type?: string
  }
  /**
   * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
   * @url https://core.telegram.org/bots/api#replykeyboardremove
   */
  export interface ReplyKeyboardRemove {
    /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: true
    /** Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
    selective?: boolean
  }
  /**
   * This object represents an inline keyboard that appears right next to the message it belongs to.
   * @url https://core.telegram.org/bots/api#inlinekeyboardmarkup
   */
  export interface InlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
    inline_keyboard: InlineKeyboardButton[][]
  }
  /**
   * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
   * @url https://core.telegram.org/bots/api#inlinekeyboardbutton
   */
  export interface InlineKeyboardButton {
    /** Label text on the button */
    text: string
    /** HTTP or tg:// url to be opened when button is pressed */
    url?: string
    /** An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url?: LoginUrl
    /** Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    callback_data?: string
    /** If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. */
    switch_inline_query?: string
    /** If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options. */
    switch_inline_query_current_chat?: string
    /** Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. */
    callback_game?: any
    /** Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row. */
    pay?: boolean
  }
  /**
   * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
   * @url https://core.telegram.org/bots/api#loginurl
   */
  export interface LoginUrl {
    /** An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
    url: string
    /** New text of the button in forwarded messages. */
    forward_text?: string
    /** Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username?: string
    /** Pass True to request the permission for your bot to send messages to the user. */
    request_write_access?: boolean
  }
  /**
   * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
   * @url https://core.telegram.org/bots/api#callbackquery
   */
  export interface CallbackQuery {
    /** Unique identifier for this query */
    id: string
    /** Sender */
    from: User
    /** Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message?: Message
    /** Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: string
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: string
    /** Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. */
    data?: string
    /** Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name?: string
  }
  /**
   * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
   * @url https://core.telegram.org/bots/api#forcereply
   */
  export interface ForceReply {
    /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: true
    /** The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder?: string
    /** Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
    selective?: boolean
  }
  /**
   * This object represents a chat photo.
   * @url https://core.telegram.org/bots/api#chatphoto
   */
  export interface ChatPhoto {
    /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: string
    /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: string
    /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: string
    /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: string
  }
  /**
   * Represents an invite link for a chat.
   * @url https://core.telegram.org/bots/api#chatinvitelink
   */
  export interface ChatInviteLink {
    /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
    invite_link: string
    /** Creator of the link */
    creator: User
    /** True, if the link is primary */
    is_primary: boolean
    /** True, if the link is revoked */
    is_revoked: boolean
    /** Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date?: number
    /** Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: number
  }
  /**
   * Represents a chat member that owns the chat and has all administrator privileges.
   * @url https://core.telegram.org/bots/api#chatmemberowner
   */
  export interface ChatMemberOwner {
    /** The member's status in the chat, always “creator” */
    status: string
    /** Information about the user */
    user: User
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean
    /** Custom title for this user */
    custom_title?: string
  }
  /**
   * Represents a chat member that has some additional privileges.
   * @url https://core.telegram.org/bots/api#chatmemberadministrator
   */
  export interface ChatMemberAdministrator {
    /** The member's status in the chat, always “administrator” */
    status: string
    /** Information about the user */
    user: User
    /** True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: boolean
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean
    /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: boolean
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: boolean
    /** True, if the administrator can manage voice chats */
    can_manage_voice_chats: boolean
    /** True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: boolean
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean
    /** True, if the administrator can post in the channel; channels only */
    can_post_messages?: boolean
    /** True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages?: boolean
    /** True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages?: boolean
    /** Custom title for this user */
    custom_title?: string
  }
  /**
   * Represents a chat member that has no additional privileges or restrictions.
   * @url https://core.telegram.org/bots/api#chatmembermember
   */
  export interface ChatMemberMember {
    /** The member's status in the chat, always “member” */
    status: string
    /** Information about the user */
    user: User
  }
  /**
   * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
   * @url https://core.telegram.org/bots/api#chatmemberrestricted
   */
  export interface ChatMemberRestricted {
    /** The member's status in the chat, always “restricted” */
    status: string
    /** Information about the user */
    user: User
    /** True, if the user is a member of the chat at the moment of the request */
    is_member: boolean
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean
    /** True, if the user is allowed to pin messages */
    can_pin_messages: boolean
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages: boolean
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes */
    can_send_media_messages: boolean
    /** True, if the user is allowed to send polls */
    can_send_polls: boolean
    /** True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: boolean
    /** True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: boolean
    /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever */
    until_date: number
  }
  /**
   * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
   * @url https://core.telegram.org/bots/api#chatmemberleft
   */
  export interface ChatMemberLeft {
    /** The member's status in the chat, always “left” */
    status: string
    /** Information about the user */
    user: User
  }
  /**
   * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
   * @url https://core.telegram.org/bots/api#chatmemberbanned
   */
  export interface ChatMemberBanned {
    /** The member's status in the chat, always “kicked” */
    status: string
    /** Information about the user */
    user: User
    /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever */
    until_date: number
  }
  /**
   * This object represents changes in the status of a chat member.
   * @url https://core.telegram.org/bots/api#chatmemberupdated
   */
  export interface ChatMemberUpdated {
    /** Chat the user belongs to */
    chat: Chat
    /** Performer of the action, which resulted in the change */
    from: User
    /** Date the change was done in Unix time */
    date: number
    /** Previous information about the chat member */
    old_chat_member: ChatMember
    /** New information about the chat member */
    new_chat_member: ChatMember
    /** Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link?: ChatInviteLink
  }
  /**
   * Describes actions that a non-administrator user is allowed to take in a chat.
   * @url https://core.telegram.org/bots/api#chatpermissions
   */
  export interface ChatPermissions {
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages?: boolean
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages?: boolean
    /** True, if the user is allowed to send polls, implies can_send_messages */
    can_send_polls?: boolean
    /** True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages?: boolean
    /** True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages */
    can_add_web_page_previews?: boolean
    /** True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: boolean
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users?: boolean
    /** True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: boolean
  }
  /**
   * Represents a location to which a chat is connected.
   * @url https://core.telegram.org/bots/api#chatlocation
   */
  export interface ChatLocation {
    /** The location to which the supergroup is connected. Can't be a live location. */
    location: Location
    /** Location address; 1-64 characters, as defined by the chat owner */
    address: string
  }
  /**
   * This object represents a bot command.
   * @url https://core.telegram.org/bots/api#botcommand
   */
  export interface BotCommand {
    /** Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: string
    /** Description of the command, 3-256 characters. */
    description: string
  }
  /**
   * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
   * @url https://core.telegram.org/bots/api#botcommandscopedefault
   */
  export interface BotCommandScopeDefault {
    /** Scope type, must be default */
    type: string
  }
  /**
   * Represents the scope of bot commands, covering all private chats.
   * @url https://core.telegram.org/bots/api#botcommandscopeallprivatechats
   */
  export interface BotCommandScopeAllPrivateChats {
    /** Scope type, must be all_private_chats */
    type: string
  }
  /**
   * Represents the scope of bot commands, covering all group and supergroup chats.
   * @url https://core.telegram.org/bots/api#botcommandscopeallgroupchats
   */
  export interface BotCommandScopeAllGroupChats {
    /** Scope type, must be all_group_chats */
    type: string
  }
  /**
   * Represents the scope of bot commands, covering all group and supergroup chat administrators.
   * @url https://core.telegram.org/bots/api#botcommandscopeallchatadministrators
   */
  export interface BotCommandScopeAllChatAdministrators {
    /** Scope type, must be all_chat_administrators */
    type: string
  }
  /**
   * Represents the scope of bot commands, covering a specific chat.
   * @url https://core.telegram.org/bots/api#botcommandscopechat
   */
  export interface BotCommandScopeChat {
    /** Scope type, must be chat */
    type: string
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string
  }
  /**
   * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
   * @url https://core.telegram.org/bots/api#botcommandscopechatadministrators
   */
  export interface BotCommandScopeChatAdministrators {
    /** Scope type, must be chat_administrators */
    type: string
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string
  }
  /**
   * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
   * @url https://core.telegram.org/bots/api#botcommandscopechatmember
   */
  export interface BotCommandScopeChatMember {
    /** Scope type, must be chat_member */
    type: string
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string
    /** Unique identifier of the target user */
    user_id: number
  }
  /**
   * Contains information about why a request was unsuccessful.
   * @url https://core.telegram.org/bots/api#responseparameters
   */
  export interface ResponseParameters {
    /** The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: number
    /** In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: number
  }
  /**
   * Represents a photo to be sent.
   * @url https://core.telegram.org/bots/api#inputmediaphoto
   */
  export interface InputMediaPhoto {
    /** Type of the result, must be photo */
    type: string
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files » */
    media: string
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
  }
  /**
   * Represents a video to be sent.
   * @url https://core.telegram.org/bots/api#inputmediavideo
   */
  export interface InputMediaVideo {
    /** Type of the result, must be video */
    type: string
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files » */
    media: string
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
    thumb?: any | string
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Video width */
    width?: number
    /** Video height */
    height?: number
    /** Video duration */
    duration?: number
    /** Pass True, if the uploaded video is suitable for streaming */
    supports_streaming?: boolean
  }
  /**
   * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
   * @url https://core.telegram.org/bots/api#inputmediaanimation
   */
  export interface InputMediaAnimation {
    /** Type of the result, must be animation */
    type: string
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files » */
    media: string
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
    thumb?: any | string
    /** Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Animation width */
    width?: number
    /** Animation height */
    height?: number
    /** Animation duration */
    duration?: number
  }
  /**
   * Represents an audio file to be treated as music to be sent.
   * @url https://core.telegram.org/bots/api#inputmediaaudio
   */
  export interface InputMediaAudio {
    /** Type of the result, must be audio */
    type: string
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files » */
    media: string
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
    thumb?: any | string
    /** Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Duration of the audio in seconds */
    duration?: number
    /** Performer of the audio */
    performer?: string
    /** Title of the audio */
    title?: string
  }
  /**
   * Represents a general file to be sent.
   * @url https://core.telegram.org/bots/api#inputmediadocument
   */
  export interface InputMediaDocument {
    /** Type of the result, must be document */
    type: string
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files » */
    media: string
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
    thumb?: any | string
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album. */
    disable_content_type_detection?: boolean
  }
  /**
   * This object represents a sticker.
   * @url https://core.telegram.org/bots/api#sticker
   */
  export interface Sticker {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** Sticker width */
    width: number
    /** Sticker height */
    height: number
    /** True, if the sticker is animated */
    is_animated: boolean
    /** Sticker thumbnail in the .WEBP or .JPG format */
    thumb?: PhotoSize
    /** Emoji associated with the sticker */
    emoji?: string
    /** Name of the sticker set to which the sticker belongs */
    set_name?: string
    /** For mask stickers, the position where the mask should be placed */
    mask_position?: MaskPosition
    /** File size */
    file_size?: number
  }
  /**
   * This object represents a sticker set.
   * @url https://core.telegram.org/bots/api#stickerset
   */
  export interface StickerSet {
    /** Sticker set name */
    name: string
    /** Sticker set title */
    title: string
    /** True, if the sticker set contains animated stickers */
    is_animated: boolean
    /** True, if the sticker set contains masks */
    contains_masks: boolean
    /** List of all set stickers */
    stickers: Sticker[]
    /** Sticker set thumbnail in the .WEBP or .TGS format */
    thumb?: PhotoSize
  }
  /**
   * This object describes the position on faces where a mask should be placed by default.
   * @url https://core.telegram.org/bots/api#maskposition
   */
  export interface MaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: string
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: number
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: number
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: number
  }
  /**
   * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
   * @url https://core.telegram.org/bots/api#inlinequery
   */
  export interface InlineQuery {
    /** Unique identifier for this query */
    id: string
    /** Sender */
    from: User
    /** Text of the query (up to 256 characters) */
    query: string
    /** Offset of the results to be returned, can be controlled by the bot */
    offset: string
    /** Type of the chat, from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type?: string
    /** Sender location, only for bots that request user location */
    location?: Location
  }
  /**
   * Represents a link to an article or web page.
   * @url https://core.telegram.org/bots/api#inlinequeryresultarticle
   */
  export interface InlineQueryResultArticle {
    /** Type of the result, must be article */
    type: string
    /** Unique identifier for this result, 1-64 Bytes */
    id: string
    /** Title of the result */
    title: string
    /** Content of the message to be sent */
    input_message_content: InputMessageContent
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** URL of the result */
    url?: string
    /** Pass True, if you don't want the URL to be shown in the message */
    hide_url?: boolean
    /** Short description of the result */
    description?: string
    /** Url of the thumbnail for the result */
    thumb_url?: string
    /** Thumbnail width */
    thumb_width?: number
    /** Thumbnail height */
    thumb_height?: number
  }
  /**
   * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
   * @url https://core.telegram.org/bots/api#inlinequeryresultphoto
   */
  export interface InlineQueryResultPhoto {
    /** Type of the result, must be photo */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB */
    photo_url: string
    /** URL of the thumbnail for the photo */
    thumb_url: string
    /** Width of the photo */
    photo_width?: number
    /** Height of the photo */
    photo_height?: number
    /** Title for the result */
    title?: string
    /** Short description of the result */
    description?: string
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   * @url https://core.telegram.org/bots/api#inlinequeryresultgif
   */
  export interface InlineQueryResultGif {
    /** Type of the result, must be gif */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: string
    /** Width of the GIF */
    gif_width?: number
    /** Height of the GIF */
    gif_height?: number
    /** Duration of the GIF */
    gif_duration?: number
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumb_url: string
    /** MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumb_mime_type?: string
    /** Title for the result */
    title?: string
    /** Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   * @url https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
   */
  export interface InlineQueryResultMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL for the MP4 file. File size must not exceed 1MB */
    mpeg4_url: string
    /** Video width */
    mpeg4_width?: number
    /** Video height */
    mpeg4_height?: number
    /** Video duration */
    mpeg4_duration?: number
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumb_url: string
    /** MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumb_mime_type?: string
    /** Title for the result */
    title?: string
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
   * @url https://core.telegram.org/bots/api#inlinequeryresultvideo
   */
  export interface InlineQueryResultVideo {
    /** Type of the result, must be video */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL for the embedded video player or video file */
    video_url: string
    /** Mime type of the content of video url, “text/html” or “video/mp4” */
    mime_type: string
    /** URL of the thumbnail (jpeg only) for the video */
    thumb_url: string
    /** Title for the result */
    title: string
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Video width */
    video_width?: number
    /** Video height */
    video_height?: number
    /** Video duration in seconds */
    video_duration?: number
    /** Short description of the result */
    description?: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
   * @url https://core.telegram.org/bots/api#inlinequeryresultaudio
   */
  export interface InlineQueryResultAudio {
    /** Type of the result, must be audio */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL for the audio file */
    audio_url: string
    /** Title */
    title: string
    /** Caption, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Performer */
    performer?: string
    /** Audio duration in seconds */
    audio_duration?: number
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
   * @url https://core.telegram.org/bots/api#inlinequeryresultvoice
   */
  export interface InlineQueryResultVoice {
    /** Type of the result, must be voice */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid URL for the voice recording */
    voice_url: string
    /** Recording title */
    title: string
    /** Caption, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Recording duration in seconds */
    voice_duration?: number
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the voice recording */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
   * @url https://core.telegram.org/bots/api#inlinequeryresultdocument
   */
  export interface InlineQueryResultDocument {
    /** Type of the result, must be document */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** Title for the result */
    title: string
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** A valid URL for the file */
    document_url: string
    /** Mime type of the content of the file, either “application/pdf” or “application/zip” */
    mime_type: string
    /** Short description of the result */
    description?: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent
    /** URL of the thumbnail (jpeg only) for the file */
    thumb_url?: string
    /** Thumbnail width */
    thumb_width?: number
    /** Thumbnail height */
    thumb_height?: number
  }
  /**
   * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
   * @url https://core.telegram.org/bots/api#inlinequeryresultlocation
   */
  export interface InlineQueryResultLocation {
    /** Type of the result, must be location */
    type: string
    /** Unique identifier for this result, 1-64 Bytes */
    id: string
    /** Location latitude in degrees */
    latitude: number
    /** Location longitude in degrees */
    longitude: number
    /** Location title */
    title: string
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: number
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: number
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the location */
    input_message_content?: InputMessageContent
    /** Url of the thumbnail for the result */
    thumb_url?: string
    /** Thumbnail width */
    thumb_width?: number
    /** Thumbnail height */
    thumb_height?: number
  }
  /**
   * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
   * @url https://core.telegram.org/bots/api#inlinequeryresultvenue
   */
  export interface InlineQueryResultVenue {
    /** Type of the result, must be venue */
    type: string
    /** Unique identifier for this result, 1-64 Bytes */
    id: string
    /** Latitude of the venue location in degrees */
    latitude: number
    /** Longitude of the venue location in degrees */
    longitude: number
    /** Title of the venue */
    title: string
    /** Address of the venue */
    address: string
    /** Foursquare identifier of the venue if known */
    foursquare_id?: string
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string
    /** Google Places identifier of the venue */
    google_place_id?: string
    /** Google Places type of the venue. (See supported types.) */
    google_place_type?: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the venue */
    input_message_content?: InputMessageContent
    /** Url of the thumbnail for the result */
    thumb_url?: string
    /** Thumbnail width */
    thumb_width?: number
    /** Thumbnail height */
    thumb_height?: number
  }
  /**
   * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcontact
   */
  export interface InlineQueryResultContact {
    /** Type of the result, must be contact */
    type: string
    /** Unique identifier for this result, 1-64 Bytes */
    id: string
    /** Contact's phone number */
    phone_number: string
    /** Contact's first name */
    first_name: string
    /** Contact's last name */
    last_name?: string
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the contact */
    input_message_content?: InputMessageContent
    /** Url of the thumbnail for the result */
    thumb_url?: string
    /** Thumbnail width */
    thumb_width?: number
    /** Thumbnail height */
    thumb_height?: number
  }
  /**
   * Represents a Game.
   * @url https://core.telegram.org/bots/api#inlinequeryresultgame
   */
  export interface InlineQueryResultGame {
    /** Type of the result, must be game */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** Short name of the game */
    game_short_name: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
  }
  /**
   * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
   */
  export interface InlineQueryResultCachedPhoto {
    /** Type of the result, must be photo */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier of the photo */
    photo_file_id: string
    /** Title for the result */
    title?: string
    /** Short description of the result */
    description?: string
    /** Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedgif
   */
  export interface InlineQueryResultCachedGif {
    /** Type of the result, must be gif */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier for the GIF file */
    gif_file_id: string
    /** Title for the result */
    title?: string
    /** Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
   */
  export interface InlineQueryResultCachedMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier for the MP4 file */
    mpeg4_file_id: string
    /** Title for the result */
    title?: string
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
   */
  export interface InlineQueryResultCachedSticker {
    /** Type of the result, must be sticker */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier of the sticker */
    sticker_file_id: string
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the sticker */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
   */
  export interface InlineQueryResultCachedDocument {
    /** Type of the result, must be document */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** Title for the result */
    title: string
    /** A valid file identifier for the file */
    document_file_id: string
    /** Short description of the result */
    description?: string
    /** Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
   */
  export interface InlineQueryResultCachedVideo {
    /** Type of the result, must be video */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier for the video file */
    video_file_id: string
    /** Title for the result */
    title: string
    /** Short description of the result */
    description?: string
    /** Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the video */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
   */
  export interface InlineQueryResultCachedVoice {
    /** Type of the result, must be voice */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier for the voice message */
    voice_file_id: string
    /** Voice message title */
    title: string
    /** Caption, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the voice message */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
   * @url https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
   */
  export interface InlineQueryResultCachedAudio {
    /** Type of the result, must be audio */
    type: string
    /** Unique identifier for this result, 1-64 bytes */
    id: string
    /** A valid file identifier for the audio file */
    audio_file_id: string
    /** Caption, 0-1024 characters after entities parsing */
    caption?: string
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[]
    /** Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /** Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent
  }
  /**
   * Represents the content of a text message to be sent as the result of an inline query.
   * @url https://core.telegram.org/bots/api#inputtextmessagecontent
   */
  export interface InputTextMessageContent {
    /** Text of the message to be sent, 1-4096 characters */
    message_text: string
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: string
    /** List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: MessageEntity[]
    /** Disables link previews for links in the sent message */
    disable_web_page_preview?: boolean
  }
  /**
   * Represents the content of a location message to be sent as the result of an inline query.
   * @url https://core.telegram.org/bots/api#inputlocationmessagecontent
   */
  export interface InputLocationMessageContent {
    /** Latitude of the location in degrees */
    latitude: number
    /** Longitude of the location in degrees */
    longitude: number
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: number
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: number
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number
  }
  /**
   * Represents the content of a venue message to be sent as the result of an inline query.
   * @url https://core.telegram.org/bots/api#inputvenuemessagecontent
   */
  export interface InputVenueMessageContent {
    /** Latitude of the venue in degrees */
    latitude: number
    /** Longitude of the venue in degrees */
    longitude: number
    /** Name of the venue */
    title: string
    /** Address of the venue */
    address: string
    /** Foursquare identifier of the venue, if known */
    foursquare_id?: string
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string
    /** Google Places identifier of the venue */
    google_place_id?: string
    /** Google Places type of the venue. (See supported types.) */
    google_place_type?: string
  }
  /**
   * Represents the content of a contact message to be sent as the result of an inline query.
   * @url https://core.telegram.org/bots/api#inputcontactmessagecontent
   */
  export interface InputContactMessageContent {
    /** Contact's phone number */
    phone_number: string
    /** Contact's first name */
    first_name: string
    /** Contact's last name */
    last_name?: string
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string
  }
  /**
   * Represents the content of an invoice message to be sent as the result of an inline query.
   * @url https://core.telegram.org/bots/api#inputinvoicemessagecontent
   */
  export interface InputInvoiceMessageContent {
    /** Product name, 1-32 characters */
    title: string
    /** Product description, 1-255 characters */
    description: string
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string
    /** Payment provider token, obtained via Botfather */
    provider_token: string
    /** Three-letter ISO 4217 currency code, see more on currencies */
    currency: string
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
    prices: LabeledPrice[]
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
    max_tip_amount?: number
    /** A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: number[]
    /** A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data?: string
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
    photo_url?: string
    /** Photo size */
    photo_size?: number
    /** Photo width */
    photo_width?: number
    /** Photo height */
    photo_height?: number
    /** Pass True, if you require the user's full name to complete the order */
    need_name?: boolean
    /** Pass True, if you require the user's phone number to complete the order */
    need_phone_number?: boolean
    /** Pass True, if you require the user's email address to complete the order */
    need_email?: boolean
    /** Pass True, if you require the user's shipping address to complete the order */
    need_shipping_address?: boolean
    /** Pass True, if user's phone number should be sent to provider */
    send_phone_number_to_provider?: boolean
    /** Pass True, if user's email address should be sent to provider */
    send_email_to_provider?: boolean
    /** Pass True, if the final price depends on the shipping method */
    is_flexible?: boolean
  }
  /**
   * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
   * @url https://core.telegram.org/bots/api#choseninlineresult
   */
  export interface ChosenInlineResult {
    /** The unique identifier for the result that was chosen */
    result_id: string
    /** The user that chose the result */
    from: User
    /** Sender location, only for bots that require user location */
    location?: Location
    /** Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id?: string
    /** The query that was used to obtain the result */
    query: string
  }
  /**
   * This object represents a portion of the price for goods or services.
   * @url https://core.telegram.org/bots/api#labeledprice
   */
  export interface LabeledPrice {
    /** Portion label */
    label: string
    /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: number
  }
  /**
   * This object contains basic information about an invoice.
   * @url https://core.telegram.org/bots/api#invoice
   */
  export interface Invoice {
    /** Product name */
    title: string
    /** Product description */
    description: string
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: string
    /** Three-letter ISO 4217 currency code */
    currency: string
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number
  }
  /**
   * This object represents a shipping address.
   * @url https://core.telegram.org/bots/api#shippingaddress
   */
  export interface ShippingAddress {
    /** ISO 3166-1 alpha-2 country code */
    country_code: string
    /** State, if applicable */
    state: string
    /** City */
    city: string
    /** First line for the address */
    street_line1: string
    /** Second line for the address */
    street_line2: string
    /** Address post code */
    post_code: string
  }
  /**
   * This object represents information about an order.
   * @url https://core.telegram.org/bots/api#orderinfo
   */
  export interface OrderInfo {
    /** User name */
    name?: string
    /** User's phone number */
    phone_number?: string
    /** User email */
    email?: string
    /** User shipping address */
    shipping_address?: ShippingAddress
  }
  /**
   * This object represents one shipping option.
   * @url https://core.telegram.org/bots/api#shippingoption
   */
  export interface ShippingOption {
    /** Shipping option identifier */
    id: string
    /** Option title */
    title: string
    /** List of price portions */
    prices: LabeledPrice[]
  }
  /**
   * This object contains basic information about a successful payment.
   * @url https://core.telegram.org/bots/api#successfulpayment
   */
  export interface SuccessfulPayment {
    /** Three-letter ISO 4217 currency code */
    currency: string
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number
    /** Bot specified invoice payload */
    invoice_payload: string
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: string
    /** Order info provided by the user */
    order_info?: OrderInfo
    /** Telegram payment identifier */
    telegram_payment_charge_id: string
    /** Provider payment identifier */
    provider_payment_charge_id: string
  }
  /**
   * This object contains information about an incoming shipping query.
   * @url https://core.telegram.org/bots/api#shippingquery
   */
  export interface ShippingQuery {
    /** Unique query identifier */
    id: string
    /** User who sent the query */
    from: User
    /** Bot specified invoice payload */
    invoice_payload: string
    /** User specified shipping address */
    shipping_address: ShippingAddress
  }
  /**
   * This object contains information about an incoming pre-checkout query.
   * @url https://core.telegram.org/bots/api#precheckoutquery
   */
  export interface PreCheckoutQuery {
    /** Unique query identifier */
    id: string
    /** User who sent the query */
    from: User
    /** Three-letter ISO 4217 currency code */
    currency: string
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number
    /** Bot specified invoice payload */
    invoice_payload: string
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: string
    /** Order info provided by the user */
    order_info?: OrderInfo
  }
  /**
   * Contains information about Telegram Passport data shared with the bot by the user.
   * @url https://core.telegram.org/bots/api#passportdata
   */
  export interface PassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: EncryptedPassportElement[]
    /** Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials
  }
  /**
   * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
   * @url https://core.telegram.org/bots/api#passportfile
   */
  export interface PassportFile {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /** File size */
    file_size: number
    /** Unix time when the file was uploaded */
    file_date: number
  }
  /**
   * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
   * @url https://core.telegram.org/bots/api#encryptedpassportelement
   */
  export interface EncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: string
    /** Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data?: string
    /** User's verified phone number, available only for “phone_number” type */
    phone_number?: string
    /** User's verified email address, available only for “email” type */
    email?: string
    /** Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files?: PassportFile[]
    /** Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: PassportFile
    /** Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: PassportFile
    /** Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: PassportFile
    /** Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: PassportFile[]
    /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: string
  }
  /**
   * Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
   * @url https://core.telegram.org/bots/api#encryptedcredentials
   */
  export interface EncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: string
    /** Base64-encoded data hash for data authentication */
    hash: string
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: string
  }
  /**
   * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
   * @url https://core.telegram.org/bots/api#passportelementerrordatafield
   */
  export interface PassportElementErrorDataField {
    /** Error source, must be data */
    source: string
    /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    type: string
    /** Name of the data field which has the error */
    field_name: string
    /** Base64-encoded data hash */
    data_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
   * @url https://core.telegram.org/bots/api#passportelementerrorfrontside
   */
  export interface PassportElementErrorFrontSide {
    /** Error source, must be front_side */
    source: string
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
   * @url https://core.telegram.org/bots/api#passportelementerrorreverseside
   */
  export interface PassportElementErrorReverseSide {
    /** Error source, must be reverse_side */
    source: string
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: string
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
   * @url https://core.telegram.org/bots/api#passportelementerrorselfie
   */
  export interface PassportElementErrorSelfie {
    /** Error source, must be selfie */
    source: string
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string
    /** Base64-encoded hash of the file with the selfie */
    file_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
   * @url https://core.telegram.org/bots/api#passportelementerrorfile
   */
  export interface PassportElementErrorFile {
    /** Error source, must be file */
    source: string
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string
    /** Base64-encoded file hash */
    file_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
   * @url https://core.telegram.org/bots/api#passportelementerrorfiles
   */
  export interface PassportElementErrorFiles {
    /** Error source, must be files */
    source: string
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string
    /** List of base64-encoded file hashes */
    file_hashes: string[]
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
   * @url https://core.telegram.org/bots/api#passportelementerrortranslationfile
   */
  export interface PassportElementErrorTranslationFile {
    /** Error source, must be translation_file */
    source: string
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string
    /** Base64-encoded file hash */
    file_hash: string
    /** Error message */
    message: string
  }
  /**
   * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
   * @url https://core.telegram.org/bots/api#passportelementerrortranslationfiles
   */
  export interface PassportElementErrorTranslationFiles {
    /** Error source, must be translation_files */
    source: string
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string
    /** List of base64-encoded file hashes */
    file_hashes: string[]
    /** Error message */
    message: string
  }
  /**
   * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
   * @url https://core.telegram.org/bots/api#passportelementerrorunspecified
   */
  export interface PassportElementErrorUnspecified {
    /** Error source, must be unspecified */
    source: string
    /** Type of element of the user's Telegram Passport which has the issue */
    type: string
    /** Base64-encoded element hash */
    element_hash: string
    /** Error message */
    message: string
  }
  /**
   * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
   * @url https://core.telegram.org/bots/api#game
   */
  export interface Game {
    /** Title of the game */
    title: string
    /** Description of the game */
    description: string
    /** Photo that will be displayed in the game message in chats. */
    photo: PhotoSize[]
    /** Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text?: string
    /** Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities?: MessageEntity[]
    /** Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation?: Animation
  }
  /**
   * This object represents one row of the high scores table for a game.
   * @url https://core.telegram.org/bots/api#gamehighscore
   */
  export interface GameHighScore {
    /** Position in high score table for the game */
    position: number
    /** User */
    user: User
    /** Score */
    score: number
  }

  export interface API {

    /**
     * Use this method to receive incoming updates using long polling (wiki). An Array of Update objects is returned.
     * @url https://core.telegram.org/bots/api#getupdates
     */
    "getUpdates": {
      request: {
        /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten. */
        offset?: number
        /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
        limit?: number
        /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
        timeout?: number
        /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. */
        allowed_updates?: string[]
      }
      response: Update[]
    }
    /**
     * Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
     * @url https://core.telegram.org/bots/api#setwebhook
     */
    "setWebhook": {
      request: {
        /** HTTPS url to send updates to. Use an empty string to remove webhook integration */
        url: string
        /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
        certificate?: any
        /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
        ip_address?: string
        /** Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
        max_connections?: number
        /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
        allowed_updates?: string[]
        /** Pass True to drop all pending updates */
        drop_pending_updates?: boolean
      }
      response: true
    }
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
     * @url https://core.telegram.org/bots/api#deletewebhook
     */
    "deleteWebhook": {
      request: {
        /** Pass True to drop all pending updates */
        drop_pending_updates?: boolean
      }
      response: true
    }
    /**
     * Use this method to send text messages. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendmessage
     */
    "sendMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Text of the message to be sent, 1-4096 characters after entities parsing */
        text: string
        /** Mode for parsing entities in the message text. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
        entities?: MessageEntity[]
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#forwardmessage
     */
    "forwardMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
        from_chat_id: number | string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** Message identifier in the chat specified in from_chat_id */
        message_id: number
      }
      response: Message
    }
    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
     * @url https://core.telegram.org/bots/api#copymessage
     */
    "copyMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
        from_chat_id: number | string
        /** Message identifier in the chat specified in from_chat_id */
        message_id: number
        /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
        caption?: string
        /** Mode for parsing entities in the new caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: MessageId
    }
    /**
     * Use this method to send photos. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendphoto
     */
    "sendPhoto": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More info on Sending Files » */
        photo: any | string
        /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the photo caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
     * @url https://core.telegram.org/bots/api#sendaudio
     */
    "sendAudio": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        audio: any | string
        /** Audio caption, 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the audio caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Duration of the audio in seconds */
        duration?: number
        /** Performer */
        performer?: string
        /** Track name */
        title?: string
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
        thumb?: any | string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
     * @url https://core.telegram.org/bots/api#senddocument
     */
    "sendDocument": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        document: any | string
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
        thumb?: any | string
        /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the document caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
        disable_content_type_detection?: boolean
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
     * @url https://core.telegram.org/bots/api#sendvideo
     */
    "sendVideo": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More info on Sending Files » */
        video: any | string
        /** Duration of sent video in seconds */
        duration?: number
        /** Video width */
        width?: number
        /** Video height */
        height?: number
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
        thumb?: any | string
        /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the video caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Pass True, if the uploaded video is suitable for streaming */
        supports_streaming?: boolean
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
     * @url https://core.telegram.org/bots/api#sendanimation
     */
    "sendAnimation": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More info on Sending Files » */
        animation: any | string
        /** Duration of sent animation in seconds */
        duration?: number
        /** Animation width */
        width?: number
        /** Animation height */
        height?: number
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
        thumb?: any | string
        /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the animation caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
     * @url https://core.telegram.org/bots/api#sendvoice
     */
    "sendVoice": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        voice: any | string
        /** Voice message caption, 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** Duration of the voice message in seconds */
        duration?: number
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendvideonote
     */
    "sendVideoNote": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More info on Sending Files ». Sending video notes by a URL is currently unsupported */
        video_note: any | string
        /** Duration of sent video in seconds */
        duration?: number
        /** Video width and height, i.e. diameter of the video message */
        length?: number
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files » */
        thumb?: any | string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
     * @url https://core.telegram.org/bots/api#sendmediagroup
     */
    "sendMediaGroup": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
        media: InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo[]
        /** Sends messages silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the messages are a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
      }
      response: Message[]
    }
    /**
     * Use this method to send point on the map. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendlocation
     */
    "sendLocation": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Latitude of the location */
        latitude: number
        /** Longitude of the location */
        longitude: number
        /** The radius of uncertainty for the location, measured in meters; 0-1500 */
        horizontal_accuracy?: number
        /** Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400. */
        live_period?: number
        /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
        heading?: number
        /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
        proximity_alert_radius?: number
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#editmessagelivelocation
     */
    "editMessageLiveLocation": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message to edit */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** Latitude of new location */
        latitude: number
        /** Longitude of new location */
        longitude: number
        /** The radius of uncertainty for the location, measured in meters; 0-1500 */
        horizontal_accuracy?: number
        /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
        heading?: number
        /** Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
        proximity_alert_radius?: number
        /** A JSON-serialized object for a new inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#stopmessagelivelocation
     */
    "stopMessageLiveLocation": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** A JSON-serialized object for a new inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to send information about a venue. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendvenue
     */
    "sendVenue": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Latitude of the venue */
        latitude: number
        /** Longitude of the venue */
        longitude: number
        /** Name of the venue */
        title: string
        /** Address of the venue */
        address: string
        /** Foursquare identifier of the venue */
        foursquare_id?: string
        /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
        foursquare_type?: string
        /** Google Places identifier of the venue */
        google_place_id?: string
        /** Google Places type of the venue. (See supported types.) */
        google_place_type?: string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send phone contacts. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendcontact
     */
    "sendContact": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Contact's phone number */
        phone_number: string
        /** Contact's first name */
        first_name: string
        /** Contact's last name */
        last_name?: string
        /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
        vcard?: string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send a native poll. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendpoll
     */
    "sendPoll": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Poll question, 1-300 characters */
        question: string
        /** A JSON-serialized list of answer options, 2-10 strings 1-100 characters each */
        options: string[]
        /** True, if the poll needs to be anonymous, defaults to True */
        is_anonymous?: boolean
        /** Poll type, “quiz” or “regular”, defaults to “regular” */
        type?: string
        /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
        allows_multiple_answers?: boolean
        /** 0-based identifier of the correct answer option, required for polls in quiz mode */
        correct_option_id?: number
        /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
        explanation?: string
        /** Mode for parsing entities in the explanation. See formatting options for more details. */
        explanation_parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode */
        explanation_entities?: MessageEntity[]
        /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. */
        open_period?: number
        /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. */
        close_date?: number
        /** Pass True, if the poll needs to be immediately closed. This can be useful for poll preview. */
        is_closed?: boolean
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#senddice
     */
    "sendDice": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
        emoji?: string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
     * @url https://core.telegram.org/bots/api#sendchataction
     */
    "sendChatAction": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, find_location for location data, record_video_note or upload_video_note for video notes. */
        action: string
      }
      response: true
    }
    /**
     * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
     * @url https://core.telegram.org/bots/api#getuserprofilephotos
     */
    "getUserProfilePhotos": {
      request: {
        /** Unique identifier of the target user */
        user_id: number
        /** Sequential number of the first photo to be returned. By default, all photos are returned. */
        offset?: number
        /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
        limit?: number
      }
      response: UserProfilePhotos
    }
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     * @url https://core.telegram.org/bots/api#getfile
     */
    "getFile": {
      request: {
        /** File identifier to get info about */
        file_id: string
      }
      response: File
    }
    /**
     * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#banchatmember
     */
    "banChatMember": {
      request: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
        until_date?: number
        /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
        revoke_messages?: boolean
      }
      response: true
    }
    /**
     * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
     * @url https://core.telegram.org/bots/api#unbanchatmember
     */
    "unbanChatMember": {
      request: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format @username) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
        /** Do nothing if the user is not banned */
        only_if_banned?: boolean
      }
      response: true
    }
    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
     * @url https://core.telegram.org/bots/api#restrictchatmember
     */
    "restrictChatMember": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
        /** A JSON-serialized object for new user permissions */
        permissions: ChatPermissions
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: number
      }
      response: true
    }
    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns True on success.
     * @url https://core.telegram.org/bots/api#promotechatmember
     */
    "promoteChatMember": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
        /** Pass True, if the administrator's presence in the chat is hidden */
        is_anonymous?: boolean
        /** Pass True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
        can_manage_chat?: boolean
        /** Pass True, if the administrator can create channel posts, channels only */
        can_post_messages?: boolean
        /** Pass True, if the administrator can edit messages of other users and can pin messages, channels only */
        can_edit_messages?: boolean
        /** Pass True, if the administrator can delete messages of other users */
        can_delete_messages?: boolean
        /** Pass True, if the administrator can manage voice chats */
        can_manage_voice_chats?: boolean
        /** Pass True, if the administrator can restrict, ban or unban chat members */
        can_restrict_members?: boolean
        /** Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) */
        can_promote_members?: boolean
        /** Pass True, if the administrator can change chat title, photo and other settings */
        can_change_info?: boolean
        /** Pass True, if the administrator can invite new users to the chat */
        can_invite_users?: boolean
        /** Pass True, if the administrator can pin messages, supergroups only */
        can_pin_messages?: boolean
      }
      response: true
    }
    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchatadministratorcustomtitle
     */
    "setChatAdministratorCustomTitle": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
        /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
        custom_title: string
      }
      response: true
    }
    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchatpermissions
     */
    "setChatPermissions": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
        chat_id: number | string
        /** A JSON-serialized object for new default chat permissions */
        permissions: ChatPermissions
      }
      response: true
    }
    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.
     * @url https://core.telegram.org/bots/api#exportchatinvitelink
     */
    "exportChatInviteLink": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: string
    }
    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
     * @url https://core.telegram.org/bots/api#createchatinvitelink
     */
    "createChatInviteLink": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Point in time (Unix timestamp) when the link will expire */
        expire_date?: number
        /** Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
        member_limit?: number
      }
      response: ChatInviteLink
    }
    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the edited invite link as a ChatInviteLink object.
     * @url https://core.telegram.org/bots/api#editchatinvitelink
     */
    "editChatInviteLink": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** The invite link to edit */
        invite_link: string
        /** Point in time (Unix timestamp) when the link will expire */
        expire_date?: number
        /** Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
        member_limit?: number
      }
      response: ChatInviteLink
    }
    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the revoked invite link as ChatInviteLink object.
     * @url https://core.telegram.org/bots/api#revokechatinvitelink
     */
    "revokeChatInviteLink": {
      request: {
        /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** The invite link to revoke */
        invite_link: string
      }
      response: ChatInviteLink
    }
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchatphoto
     */
    "setChatPhoto": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** New chat photo, uploaded using multipart/form-data */
        photo: any
      }
      response: true
    }
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#deletechatphoto
     */
    "deleteChatPhoto": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: true
    }
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchattitle
     */
    "setChatTitle": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** New chat title, 1-255 characters */
        title: string
      }
      response: true
    }
    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchatdescription
     */
    "setChatDescription": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** New chat description, 0-255 characters */
        description?: string
      }
      response: true
    }
    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @url https://core.telegram.org/bots/api#pinchatmessage
     */
    "pinChatMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Identifier of a message to pin */
        message_id: number
        /** Pass True, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
        disable_notification?: boolean
      }
      response: true
    }
    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @url https://core.telegram.org/bots/api#unpinchatmessage
     */
    "unpinChatMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned. */
        message_id?: number
      }
      response: true
    }
    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @url https://core.telegram.org/bots/api#unpinallchatmessages
     */
    "unpinAllChatMessages": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: true
    }
    /**
     * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
     * @url https://core.telegram.org/bots/api#leavechat
     */
    "leaveChat": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: true
    }
    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
     * @url https://core.telegram.org/bots/api#getchat
     */
    "getChat": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: Chat
    }
    /**
     * Use this method to get a list of administrators in a chat. On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
     * @url https://core.telegram.org/bots/api#getchatadministrators
     */
    "getChatAdministrators": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: ChatMember[]
    }
    /**
     * Use this method to get the number of members in a chat. Returns Int on success.
     * @url https://core.telegram.org/bots/api#getchatmembercount
     */
    "getChatMemberCount": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
      }
      response: number
    }
    /**
     * Use this method to get information about a member of a chat. Returns a ChatMember object on success.
     * @url https://core.telegram.org/bots/api#getchatmember
     */
    "getChatMember": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
        chat_id: number | string
        /** Unique identifier of the target user */
        user_id: number
      }
      response: ChatMember
    }
    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * @url https://core.telegram.org/bots/api#setchatstickerset
     */
    "setChatStickerSet": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
        chat_id: number | string
        /** Name of the sticker set to be set as the group sticker set */
        sticker_set_name: string
      }
      response: true
    }
    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * @url https://core.telegram.org/bots/api#deletechatstickerset
     */
    "deleteChatStickerSet": {
      request: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
        chat_id: number | string
      }
      response: true
    }
    /**
     * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
     * @url https://core.telegram.org/bots/api#answercallbackquery
     */
    "answerCallbackQuery": {
      request: {
        /** Unique identifier for the query to be answered */
        callback_query_id: string
        /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
        text?: string
        /** If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. */
        show_alert?: boolean
        /** URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game — note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. */
        url?: string
        /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
        cache_time?: number
      }
      response: true
    }
    /**
     * Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands. Returns True on success.
     * @url https://core.telegram.org/bots/api#setmycommands
     */
    "setMyCommands": {
      request: {
        /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
        commands: BotCommand[]
        /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
        scope?: BotCommandScope
        /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
        language_code?: string
      }
      response: true
    }
    /**
     * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
     * @url https://core.telegram.org/bots/api#deletemycommands
     */
    "deleteMyCommands": {
      request: {
        /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
        scope?: BotCommandScope
        /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
        language_code?: string
      }
      response: true
    }
    /**
     * Use this method to get the current list of the bot's commands for the given scope and user language. Returns Array of BotCommand on success. If commands aren't set, an empty list is returned.
     * @url https://core.telegram.org/bots/api#getmycommands
     */
    "getMyCommands": {
      request: {
        /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
        scope?: BotCommandScope
        /** A two-letter ISO 639-1 language code or an empty string */
        language_code?: string
      }
      response: BotCommand[]
    }
    /**
     * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#editmessagetext
     */
    "editMessageText": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message to edit */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** New text of the message, 1-4096 characters after entities parsing */
        text: string
        /** Mode for parsing entities in the message text. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
        entities?: MessageEntity[]
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean
        /** A JSON-serialized object for an inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#editmessagecaption
     */
    "editMessageCaption": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message to edit */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** New caption of the message, 0-1024 characters after entities parsing */
        caption?: string
        /** Mode for parsing entities in the message caption. See formatting options for more details. */
        parse_mode?: string
        /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
        caption_entities?: MessageEntity[]
        /** A JSON-serialized object for an inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#editmessagemedia
     */
    "editMessageMedia": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message to edit */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** A JSON-serialized object for a new media content of the message */
        media: InputMedia
        /** A JSON-serialized object for a new inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @url https://core.telegram.org/bots/api#editmessagereplymarkup
     */
    "editMessageReplyMarkup": {
      request: {
        /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id?: number | string
        /** Required if inline_message_id is not specified. Identifier of the message to edit */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
        /** A JSON-serialized object for an inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
     * @url https://core.telegram.org/bots/api#stoppoll
     */
    "stopPoll": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Identifier of the original message with the poll */
        message_id: number
        /** A JSON-serialized object for a new message inline keyboard. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Poll
    }
    /**
     * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
     * @url https://core.telegram.org/bots/api#deletemessage
     */
    "deleteMessage": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Identifier of the message to delete */
        message_id: number
      }
      response: true
    }
    /**
     * Use this method to send static .WEBP or animated .TGS stickers. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendsticker
     */
    "sendSticker": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        sticker: any | string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
      }
      response: Message
    }
    /**
     * Use this method to get a sticker set. On success, a StickerSet object is returned.
     * @url https://core.telegram.org/bots/api#getstickerset
     */
    "getStickerSet": {
      request: {
        /** Name of the sticker set */
        name: string
      }
      response: StickerSet
    }
    /**
     * Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success.
     * @url https://core.telegram.org/bots/api#uploadstickerfile
     */
    "uploadStickerFile": {
      request: {
        /** User identifier of sticker file owner */
        user_id: number
        /** PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More info on Sending Files » */
        png_sticker: any
      }
      response: File
    }
    /**
     * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You must use exactly one of the fields png_sticker or tgs_sticker. Returns True on success.
     * @url https://core.telegram.org/bots/api#createnewstickerset
     */
    "createNewStickerSet": {
      request: {
        /** User identifier of created sticker set owner */
        user_id: number
        /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in “_by_<bot username>”. <bot_username> is case insensitive. 1-64 characters. */
        name: string
        /** Sticker set title, 1-64 characters */
        title: string
        /** PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        png_sticker?: any | string
        /** TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements */
        tgs_sticker?: any
        /** One or more emoji corresponding to the sticker */
        emojis: string
        /** Pass True, if a set of mask stickers should be created */
        contains_masks?: boolean
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition
      }
      response: true
    }
    /**
     * Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields png_sticker or tgs_sticker. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
     * @url https://core.telegram.org/bots/api#addstickertoset
     */
    "addStickerToSet": {
      request: {
        /** User identifier of sticker set owner */
        user_id: number
        /** Sticker set name */
        name: string
        /** PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » */
        png_sticker?: any | string
        /** TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements */
        tgs_sticker?: any
        /** One or more emoji corresponding to the sticker */
        emojis: string
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition
      }
      response: true
    }
    /**
     * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
     * @url https://core.telegram.org/bots/api#setstickerpositioninset
     */
    "setStickerPositionInSet": {
      request: {
        /** File identifier of the sticker */
        sticker: string
        /** New sticker position in the set, zero-based */
        position: number
      }
      response: true
    }
    /**
     * Use this method to delete a sticker from a set created by the bot. Returns True on success.
     * @url https://core.telegram.org/bots/api#deletestickerfromset
     */
    "deleteStickerFromSet": {
      request: {
        /** File identifier of the sticker */
        sticker: string
      }
      response: true
    }
    /**
     * Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns True on success.
     * @url https://core.telegram.org/bots/api#setstickersetthumb
     */
    "setStickerSetThumb": {
      request: {
        /** Sticker set name */
        name: string
        /** User identifier of the sticker set owner */
        user_id: number
        /** A PNG image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a TGS animation with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/animated_stickers#technical-requirements for animated sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files ». Animated sticker set thumbnail can't be uploaded via HTTP URL. */
        thumb?: any | string
      }
      response: true
    }
    /**
     * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
     * @url https://core.telegram.org/bots/api#answerinlinequery
     */
    "answerInlineQuery": {
      request: {
        /** Unique identifier for the answered query */
        inline_query_id: string
        /** A JSON-serialized array of results for the inline query */
        results: InlineQueryResult[]
        /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
        cache_time?: number
        /** Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
        is_personal?: boolean
        /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
        next_offset?: string
        /** If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter */
        switch_pm_text?: string
        /** Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
        switch_pm_parameter?: string
      }
      response: true
    }
    /**
     * Use this method to send invoices. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendinvoice
     */
    "sendInvoice": {
      request: {
        /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
        chat_id: number | string
        /** Product name, 1-32 characters */
        title: string
        /** Product description, 1-255 characters */
        description: string
        /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
        payload: string
        /** Payments provider token, obtained via Botfather */
        provider_token: string
        /** Three-letter ISO 4217 currency code, see more on currencies */
        currency: string
        /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
        prices: LabeledPrice[]
        /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
        max_tip_amount?: number
        /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
        suggested_tip_amounts?: number[]
        /** Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter */
        start_parameter?: string
        /** A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
        provider_data?: string
        /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
        photo_url?: string
        /** Photo size */
        photo_size?: number
        /** Photo width */
        photo_width?: number
        /** Photo height */
        photo_height?: number
        /** Pass True, if you require the user's full name to complete the order */
        need_name?: boolean
        /** Pass True, if you require the user's phone number to complete the order */
        need_phone_number?: boolean
        /** Pass True, if you require the user's email address to complete the order */
        need_email?: boolean
        /** Pass True, if you require the user's shipping address to complete the order */
        need_shipping_address?: boolean
        /** Pass True, if user's phone number should be sent to provider */
        send_phone_number_to_provider?: boolean
        /** Pass True, if user's email address should be sent to provider */
        send_email_to_provider?: boolean
        /** Pass True, if the final price depends on the shipping method */
        is_flexible?: boolean
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
     * @url https://core.telegram.org/bots/api#answershippingquery
     */
    "answerShippingQuery": {
      request: {
        /** Unique identifier for the query to be answered */
        shipping_query_id: string
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: boolean
        /** Required if ok is True. A JSON-serialized array of available shipping options. */
        shipping_options?: ShippingOption[]
        /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
        error_message?: string
      }
      response: true
    }
    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     * @url https://core.telegram.org/bots/api#answerprecheckoutquery
     */
    "answerPreCheckoutQuery": {
      request: {
        /** Unique identifier for the query to be answered */
        pre_checkout_query_id: string
        /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
        ok: boolean
        /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
        error_message?: string
      }
      response: true
    }
    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
     * @url https://core.telegram.org/bots/api#setpassportdataerrors
     */
    "setPassportDataErrors": {
      request: {
        /** User identifier */
        user_id: number
        /** A JSON-serialized array describing the errors */
        errors: PassportElementError[]
      }
      response: true
    }
    /**
     * Use this method to send a game. On success, the sent Message is returned.
     * @url https://core.telegram.org/bots/api#sendgame
     */
    "sendGame": {
      request: {
        /** Unique identifier for the target chat */
        chat_id: number
        /** Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather. */
        game_short_name: string
        /** Sends the message silently. Users will receive a notification with no sound. */
        disable_notification?: boolean
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number
        /** Pass True, if the message should be sent even if the specified replied-to message is not found */
        allow_sending_without_reply?: boolean
        /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
        reply_markup?: InlineKeyboardMarkup
      }
      response: Message
    }
    /**
     * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
     * @url https://core.telegram.org/bots/api#setgamescore
     */
    "setGameScore": {
      request: {
        /** User identifier */
        user_id: number
        /** New score, must be non-negative */
        score: number
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean
        /** Required if inline_message_id is not specified. Unique identifier for the target chat */
        chat_id?: number
        /** Required if inline_message_id is not specified. Identifier of the sent message */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
      }
      response: Message
    }
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an Array of GameHighScore objects.
     * @url https://core.telegram.org/bots/api#getgamehighscores
     */
    "getGameHighScores": {
      request: {
        /** Target user id */
        user_id: number
        /** Required if inline_message_id is not specified. Unique identifier for the target chat */
        chat_id?: number
        /** Required if inline_message_id is not specified. Identifier of the sent message */
        message_id?: number
        /** Required if chat_id and message_id are not specified. Identifier of the inline message */
        inline_message_id?: string
      }
      response: GameHighScore[]
    }
  }
}