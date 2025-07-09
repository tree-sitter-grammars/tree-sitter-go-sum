package tree_sitter_gosum_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_gosum "github.com/tree-sitter-grammars/tree-sitter-go-sum/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_gosum.Language())
	if language == nil {
		t.Errorf("Error loading go.sum grammar")
	}
}
