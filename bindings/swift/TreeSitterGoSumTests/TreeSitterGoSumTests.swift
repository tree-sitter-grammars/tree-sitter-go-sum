import XCTest
import SwiftTreeSitter
import TreeSitterGoSum

final class TreeSitterGoSumTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_gosum())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading go.sum grammar")
    }
}
