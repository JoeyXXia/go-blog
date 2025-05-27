package database

import (
	"github.com/gofrs/uuid"
	"server/global"
	"server/model/appTypes"
)

type User struct {
	global.MODEL
	UUID      uuid.UUID         `json:"uuid" gorm:"type:char(36);unique"`
	Username  string            `json:"username"`
	Password  string            `json:"password"`
	Email     string            `json:"-"`
	Openid    string            `json:"openid"`
	Avatar    string            `json:"avatar" gorm:"size:255"`
	Address   string            `json:"address"`
	Signature string            `json:"signature" gorm:"default:'签名空白'"`
	RoleId    appTypes.RoleID   `json:"role_id"`
	Register  appTypes.Register `json:"register"`
	Freeze    bool              `json:"freeze"`
}
