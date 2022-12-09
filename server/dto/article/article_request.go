package articledto

type ArticleRequest struct {
	Author string `json:"author" form:"author" gorm:"type:text" validate:"required"`
	Title  string `json:"title" form:"title" gorm:"type:text" validate:"required"`
	Body   string `json:"body" gorm:"type:text" form:"body" validate:"required"`
}

type ArticleRequestSearh struct {
	Author string `json:"author" form:"author" gorm:"type:text"`
	Query  string `json:"query" form:"query" gorm:"type:text"`
}
