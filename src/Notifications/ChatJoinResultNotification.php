<?php

namespace Haxibiao\Breeze\Notifications;

use Haxibiao\Sns\Chat;
use Illuminate\Bus\Queueable;

class ChatJoinResultNotification extends BreezeNotification
{
    use Queueable;

    public static $notify_event = "群聊申请审核通知";

    public $chat;
    public $result;
    public $description;

    public function __construct(Chat $chat, $user, $result, $description)
    {
        $this->sender      = $chat->user;
        $this->chat        = $chat;
        $this->result      = $result;
        $this->description = $description;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        $title = '';
        if ($this->result) {
            $title = "群主同意了你的加群申请";
        } else {
            $title = "群主拒绝了你的加群申请";
        }
        //互动用户
        $data = $this->senderToArray();

        $data = array_merge($data, [
            'type'        => 'chat',
            'id'          => $this->chat->id,
            'status'      => $this->result,
            'name'        => $this->chat->subject,
            'title'       => $title,
            'description' => $this->description, //对象的内容
            'cover' => $this->chat->icon ?? null,
        ]);
        return $data;

    }

}
