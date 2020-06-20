<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['exp', 'level'];
    protected $with = ['handIns'];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getExpAttribute()
    {
        $exp = 0;
        foreach ($this->handIns as $handIn) {
            foreach ($handIn->rating as $rating) {
                $exp += $rating->entity->exp;
            }
            $exp += $handIn->game->exp();
        }
        return $exp;
    }

    public function getLevelAttribute()
    {
        $exp = $this->getExpAttribute();
        $level = 0;
        $levels = Level::all();
        foreach ($levels as $level) {

        }
    }

    /**
     * @return HandIn[]|mixed
     */
    public function handIns()
    {
        return $this->hasMany(HandIn::class);
    }
}
