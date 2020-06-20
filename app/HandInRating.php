<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HandInRating extends Model
{
    protected $table = 'hand_in_rating';

    protected $with = ['entity'];

    public function entity()
    {
        return $this->hasOne(Rating::class);
    }
}
