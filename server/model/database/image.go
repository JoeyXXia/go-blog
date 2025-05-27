package database

import "server/global"

type Image struct {
	global.MODEL
	Name string `json:"name"`
	URL  string `json:"url" gorm:"size:255;unique"`
}
