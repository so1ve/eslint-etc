/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-etc
 */

import { TSESTree as es } from "@typescript-eslint/experimental-utils";

export function isArrayExpression(node: es.Node): node is es.ArrayExpression {
  return node.type === "ArrayExpression";
}

export function isArrowFunctionExpression(
  node: es.Node
): node is es.ArrowFunctionExpression {
  return node.type === "ArrowFunctionExpression";
}

export function isAssignmentExpression(
  node: es.Node
): node is es.AssignmentExpression {
  return node.type === "AssignmentExpression";
}

export function isBlockStatement(node: es.Node): node is es.BlockStatement {
  return node.type === "BlockStatement";
}

export function isCallExpression(node: es.Node): node is es.CallExpression {
  return node.type === "CallExpression";
}

export function isExpressionStatement(
  node: es.Node
): node is es.ExpressionStatement {
  return node && node.type === "ExpressionStatement";
}

export function isFunctionDeclaration(
  node: es.Node
): node is es.FunctionDeclaration {
  return node.type === "FunctionDeclaration";
}

export function isFunctionExpression(
  node: es.Node
): node is es.FunctionExpression {
  return node.type === "FunctionExpression";
}

export function isIdentifier(node: es.Node): node is es.Identifier {
  return node.type === "Identifier";
}

export function isLiteral(node: es.Node): node is es.Literal {
  return node.type === "Literal";
}

export function isMemberExpression(node: es.Node): node is es.MemberExpression {
  return node.type === "MemberExpression";
}

export function isObjectExpression(node: es.Node): node is es.ObjectExpression {
  return node.type === "ObjectExpression";
}

export function isObjectPattern(node: es.Node): node is es.ObjectPattern {
  return node.type === "ObjectPattern";
}

export function isProgram(node: es.Node): node is es.Program {
  return node.type === "Program";
}

export function isRestElement(node: es.Node): node is es.RestElement {
  return node.type === "RestElement";
}

export function isThisExpression(node: es.Node): node is es.ThisExpression {
  return node.type === "ThisExpression";
}

export function isVariableDeclarator(
  node: es.Node
): node is es.VariableDeclarator {
  return node.type === "VariableDeclarator";
}
