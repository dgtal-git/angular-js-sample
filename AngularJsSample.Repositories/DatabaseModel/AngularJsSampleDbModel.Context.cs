﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngularJsSample.Repositories.DatabaseModel
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class AngularJsSampleDbEntities : DbContext
    {
        public AngularJsSampleDbEntities()
            : base("name=AngularJsSampleDbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<UserInfo> UserInfoes { get; set; }
    
        public virtual int MoviePerson_Delete(Nullable<int> moviePersonId, Nullable<int> userLastModified)
        {
            var moviePersonIdParameter = moviePersonId.HasValue ?
                new ObjectParameter("MoviePersonId", moviePersonId) :
                new ObjectParameter("MoviePersonId", typeof(int));
    
            var userLastModifiedParameter = userLastModified.HasValue ?
                new ObjectParameter("UserLastModified", userLastModified) :
                new ObjectParameter("UserLastModified", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("MoviePerson_Delete", moviePersonIdParameter, userLastModifiedParameter);
        }
    
        public virtual ObjectResult<MoviePerson_Get_Result> MoviePerson_Get(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<MoviePerson_Get_Result>("MoviePerson_Get", idParameter);
        }
    
        public virtual ObjectResult<MoviePerson_GetAll_Result> MoviePerson_GetAll()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<MoviePerson_GetAll_Result>("MoviePerson_GetAll");
        }
    
        public virtual int MoviePerson_Insert(Nullable<int> userId, string firstName, string lastName, Nullable<System.DateTime> birthDate, string birthPlace, string biography, string imdbUrl, string imageUrl, Nullable<int> popularity)
        {
            var userIdParameter = userId.HasValue ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(int));
    
            var firstNameParameter = firstName != null ?
                new ObjectParameter("FirstName", firstName) :
                new ObjectParameter("FirstName", typeof(string));
    
            var lastNameParameter = lastName != null ?
                new ObjectParameter("LastName", lastName) :
                new ObjectParameter("LastName", typeof(string));
    
            var birthDateParameter = birthDate.HasValue ?
                new ObjectParameter("BirthDate", birthDate) :
                new ObjectParameter("BirthDate", typeof(System.DateTime));
    
            var birthPlaceParameter = birthPlace != null ?
                new ObjectParameter("BirthPlace", birthPlace) :
                new ObjectParameter("BirthPlace", typeof(string));
    
            var biographyParameter = biography != null ?
                new ObjectParameter("Biography", biography) :
                new ObjectParameter("Biography", typeof(string));
    
            var imdbUrlParameter = imdbUrl != null ?
                new ObjectParameter("ImdbUrl", imdbUrl) :
                new ObjectParameter("ImdbUrl", typeof(string));
    
            var imageUrlParameter = imageUrl != null ?
                new ObjectParameter("ImageUrl", imageUrl) :
                new ObjectParameter("ImageUrl", typeof(string));
    
            var popularityParameter = popularity.HasValue ?
                new ObjectParameter("Popularity", popularity) :
                new ObjectParameter("Popularity", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("MoviePerson_Insert", userIdParameter, firstNameParameter, lastNameParameter, birthDateParameter, birthPlaceParameter, biographyParameter, imdbUrlParameter, imageUrlParameter, popularityParameter);
        }
    
        public virtual int MoviePerson_Update(Nullable<int> moviePersonId, Nullable<int> userLastModified, string firstName, string lastName, Nullable<System.DateTime> birthDate, string birthPlace, string biography, string imdbUrl, string imageUrl, Nullable<int> popularity)
        {
            var moviePersonIdParameter = moviePersonId.HasValue ?
                new ObjectParameter("MoviePersonId", moviePersonId) :
                new ObjectParameter("MoviePersonId", typeof(int));
    
            var userLastModifiedParameter = userLastModified.HasValue ?
                new ObjectParameter("UserLastModified", userLastModified) :
                new ObjectParameter("UserLastModified", typeof(int));
    
            var firstNameParameter = firstName != null ?
                new ObjectParameter("FirstName", firstName) :
                new ObjectParameter("FirstName", typeof(string));
    
            var lastNameParameter = lastName != null ?
                new ObjectParameter("LastName", lastName) :
                new ObjectParameter("LastName", typeof(string));
    
            var birthDateParameter = birthDate.HasValue ?
                new ObjectParameter("BirthDate", birthDate) :
                new ObjectParameter("BirthDate", typeof(System.DateTime));
    
            var birthPlaceParameter = birthPlace != null ?
                new ObjectParameter("BirthPlace", birthPlace) :
                new ObjectParameter("BirthPlace", typeof(string));
    
            var biographyParameter = biography != null ?
                new ObjectParameter("Biography", biography) :
                new ObjectParameter("Biography", typeof(string));
    
            var imdbUrlParameter = imdbUrl != null ?
                new ObjectParameter("ImdbUrl", imdbUrl) :
                new ObjectParameter("ImdbUrl", typeof(string));
    
            var imageUrlParameter = imageUrl != null ?
                new ObjectParameter("ImageUrl", imageUrl) :
                new ObjectParameter("ImageUrl", typeof(string));
    
            var popularityParameter = popularity.HasValue ?
                new ObjectParameter("Popularity", popularity) :
                new ObjectParameter("Popularity", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("MoviePerson_Update", moviePersonIdParameter, userLastModifiedParameter, firstNameParameter, lastNameParameter, birthDateParameter, birthPlaceParameter, biographyParameter, imdbUrlParameter, imageUrlParameter, popularityParameter);
        }
    }
}
