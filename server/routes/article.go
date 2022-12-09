package routes

import (
	"artikel/handlers"
	"artikel/pkg/middleware"
	"artikel/pkg/mysql"
	"artikel/repositories"

	"github.com/gorilla/mux"
)

func ArticleRoutes(r *mux.Router) {
	articleRepository := repositories.RepositoryArticle(mysql.DB)
	h := handlers.HandlerArticle(articleRepository)

	r.HandleFunc("/articles", h.FindArticles).Methods("GET")
	r.HandleFunc("/article/{id}", h.GetArticle).Methods("GET")
	r.HandleFunc("/article", middleware.UploadFile(h.CreateArticle)).Methods("POST")
	r.HandleFunc("/article/{id}", middleware.UploadFile(h.UpdateArticle)).Methods("PATCH")
	r.HandleFunc("/article/{id}", h.DeleteArticle).Methods("DELETE")
}
