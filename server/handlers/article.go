package handlers

import (
	articledto "artikel/dto/article"
	dto "artikel/dto/result"
	"artikel/models"
	"artikel/repositories"
	"encoding/json"
	"net/http"
	"os"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type handlerArticle struct {
	ArticleRepository repositories.ArticleRepository
}

func HandlerArticle(ArticleRepository repositories.ArticleRepository) *handlerArticle {
	return &handlerArticle{ArticleRepository}
}

func (h *handlerArticle) FindArticles(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	articles, _ := h.ArticleRepository.FindArticles()

	for i, p := range articles {
		imagePath := os.Getenv("PATH_FILE") + p.Image
		articles[i].Image = imagePath
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: articles}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerArticle) GetArticle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	var article models.Article
	article, _ = h.ArticleRepository.GetArticle(id)
	// if err != nil {
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	// 	json.NewEncoder(w).Encode(response)
	// 	return
	// }

	article.Image = os.Getenv("PATH_FILE") + article.Image

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseArticle(article)}
	json.NewEncoder(w).Encode(response)
}

func convertResponseArticle(p models.Article) models.ArticleResponse {
	return models.ArticleResponse{
		ID:     p.ID,
		Author: p.Author,
		Title:  p.Title,
		Body:   p.Body,
		Image:  p.Image,
	}
}

func (h *handlerArticle) CreateArticle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// get image filename
	dataContex := r.Context().Value("dataFile")
	filename := dataContex.(string)

	request := articledto.ArticleRequest{
		Author: r.FormValue("author"),
		Title:  r.FormValue("title"),
		Body:   r.FormValue("body"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	article := models.Article{
		Author: request.Author,
		Title:  request.Title,
		Body:   request.Body,
		Image:  filename,
	}

	article, err = h.ArticleRepository.CreateArticle(article)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	article, _ = h.ArticleRepository.GetArticle(article.ID)

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: article}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerArticle) UpdateArticle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// get article id
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	// // get image filename
	dataContex := r.Context().Value("dataFile")
	filename := dataContex.(string)

	request := articledto.ArticleRequest{
		Author: r.FormValue("author"),
		Title:  r.FormValue("title"),
		Body:   r.FormValue("body"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	article, _ := h.ArticleRepository.GetArticle(id)

	article.Author = request.Author
	article.Title = request.Title
	article.Body = request.Body
	article.Image = filename

	article, err = h.ArticleRepository.UpdateArticle(article)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: article}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerArticle) DeleteArticle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Get article id
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	article, err := h.ArticleRepository.GetArticle(id)
	if err != nil {

	}

	deleteArticle, err := h.ArticleRepository.DeleteArticle(article)
	if err != nil {

	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: deleteArticle}
	json.NewEncoder(w).Encode(response)
}
