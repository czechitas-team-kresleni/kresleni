<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $with = ['categories'];

    public function categories()
    {
        return $this->hasMany(GameCategories::class);
    }

    public function exp()
    {
        $sum = 0;
        foreach ($this->categories as $category) {
            $sum += $category->exp_value;
        }
        return $sum;
    }
}
