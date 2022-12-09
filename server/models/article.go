package models

import "time"

type Article struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment"`
	Author    string    `json:"author" form:"author" gorm:"type:text"`
	Title     string    `json:"title" form:"title" gorm:"type:text"`
	Body      string    `json:"body" gorm:"type:text" form:"body"`
	Image     string    `json:"image" form:"image" gorm:"type: varchar(255)"`
	CreatedAt time.Time `json:"-"`
}

type ArticleResponse struct {
	ID     int    `json:"id"`
	Author string `json:"author"`
	Title  string `json:"title"`
	Body   string `json:"body"`
	Image  string `json:"image"`
}

func (ArticleResponse) TableName() string {
	return "articles"
}
