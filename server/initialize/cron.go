package initialize

import (
	"github.com/robfig/cron/v3"
	"go.uber.org/zap"
	"os"
	"server/global"
	"server/task"
)

type ZapLogger struct {
	logger *zap.Logger
}

func (l *ZapLogger) Info(msg string, keysAndValues ...interface{}) {
	l.logger.Info(msg, zap.Any("keysAndValues", keysAndValues))
}

func (l *ZapLogger) Error(err error, msg string, keysAndValues ...interface{}) {
	l.logger.Error(msg, zap.Error(err), zap.Any("keysAndValues", keysAndValues))
}

func NewZapLogger() *ZapLogger {
	return &ZapLogger{logger: global.Log}
}

func InitCron() {
	c := cron.New(cron.WithLogger(NewZapLogger()))
	err := task.RegisterScheduleTasks(c)
	if err != nil {
		global.Log.Error("Error scheduling cron job", zap.Error(err))
		os.Exit(1)
	}
	c.Start()
}
