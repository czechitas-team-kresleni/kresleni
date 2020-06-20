<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HandIn extends Model
{
    protected $table = 'hand_in';

    protected $with = ['rating', 'game'];

    public function rating()
    {
        return $this->hasMany(HandInRating::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
