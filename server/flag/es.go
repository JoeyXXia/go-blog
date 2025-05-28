package flag

import (
	"bufio"
	"fmt"
	"os"
	"server/model/elasticsearch"
	"server/service"
)

func Elasticsearch() error {
	esService := service.ServiceGroupApp.EsService

	indexExists, err := esService.IndexExists(elasticsearch.ArticleIndex())
	if err != nil {
		return err
	}

	if indexExists {
		fmt.Println("The index already exists, do you want to delete the data")

		scanner := bufio.NewScanner(os.Stdin)
		scanner.Scan()
		input := scanner.Text()

		switch input {
		case "y":
			fmt.Println("Processing to delete the data and recreate the inde..x")
			if err := esService.IndexDelete(elasticsearch.ArticleIndex()); err != nil {
				return err
			}
		case "n":

			fmt.Println("Exiting the program")
			os.Exit(0)
		default:

			fmt.Println("Invalid input . Please enter y to delete and recreate the index. or n to exit")
			return Elasticsearch()
		}

	}

	return esService.IndexCreate(elasticsearch.ArticleIndex(), elasticsearch.ArticleMapping())
}
