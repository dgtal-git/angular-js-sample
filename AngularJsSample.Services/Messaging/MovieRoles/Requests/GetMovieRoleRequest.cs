﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJsSample.Services.Messaging.MovieRoles.Requests
{
    public class GetMovieRoleRequest:RequestBase
    {
        public int MovieRoleId { get; set; }
    }
}
