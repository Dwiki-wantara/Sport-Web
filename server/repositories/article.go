package repositories

import (
	"artikel/models"

	"gorm.io/gorm"
)

type ArticleRepository interface {
	FindArticles() ([]models.Article, error)
	GetArticle(ID int) (models.Article, error)
	CreateArticle(product models.Article) (models.Article, error)
	UpdateArticle(product models.Article) (models.Article, error)
	DeleteArticle(product models.Article) (models.Article, error)
}

func RepositoryArticle(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindArticles() ([]models.Article, error) {
	var products []models.Article
	err := r.db.Preload("User").Find(&products).Error

	return products, err
}

func (r *repository) GetArticle(ID int) (models.Article, error) {
	var product models.Article
	// not yet using category relation, cause this step doesnt Belong to Many
	err := r.db.Preload("User").First(&product, ID).Error

	return product, err
}

func (r *repository) CreateArticle(product models.Article) (models.Article, error) {
	err := r.db.Create(&product).Error

	return product, err
}

func (r *repository) UpdateArticle(product models.Article) (models.Article, error) {
	err := r.db.Save(&product).Error

	return product, err
}

func (r *repository) DeleteArticle(product models.Article) (models.Article, error) {
	err := r.db.Delete(&product).Error

	return product, err
}
