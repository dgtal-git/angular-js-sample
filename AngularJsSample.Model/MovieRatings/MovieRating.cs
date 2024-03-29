﻿using AngularJsSample.Model.Movies;
using AngularJsSample.Model.Users;
using System;

namespace AngularJsSample.Model.MovieRatings
{
    /// <summary>
    /// Model class for Movie Rating
    /// </summary>
    public class MovieRating
    {
        public Movie Movie { get; set;}
        public UserInfo UserCreated { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public decimal UserRating { get; set; }
    }
}
