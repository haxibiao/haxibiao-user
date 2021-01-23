<?php

namespace Haxibiao\Breeze;

use Haxibiao\Breeze\Traits\AvatarHelper;
use Haxibiao\Breeze\Traits\UserAttrs;
use Haxibiao\Breeze\Traits\UserRelations;
use Haxibiao\Breeze\Traits\UserRepo;
use Haxibiao\Breeze\Traits\UserResolvers;
use Haxibiao\Breeze\Traits\UserScopes;
use Haxibiao\Content\Traits\UseContent;
use Haxibiao\Helpers\Traits\CanCacheAttributes;
use Haxibiao\Media\Traits\UseMedia;
use Haxibiao\Sns\Traits\UseSns;
use Haxibiao\Task\Traits\PlayWithTasks;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;

class BaseUser extends Model implements AuthenticatableContract, AuthorizableContract
{
    use CanCacheAttributes;
    use \Illuminate\Auth\Authenticatable, Authorizable;
    use Notifiable;
    use UserScopes;
    use UserAttrs;
    use UserRepo;
    use UserResolvers;
    use UserRelations;
    use AvatarHelper;

    use UseMedia;
    use UseContent;
    use UseSns;
    use PlayWithTasks;

}
