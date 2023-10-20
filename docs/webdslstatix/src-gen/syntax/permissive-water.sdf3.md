---
title: permissive-water.sdf3
hide:
  - toc
---

# `permissive-water.sdf3`



[pdmosses/webdsl-statix/webdslstatix/src-gen/syntax/permissive-water.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/syntax/permissive-water.sdf3 "The source file on GitHub"

<div class="sdf3"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <span id="permissive-water_7_23" title="Not referenced locally, nor via imports">permissive-water</span>

<span class="layout">// Key idea: WATER is the inverse of LAYOUT</span>

<span class="keyword">context-free syntax</span>
  <span class="layout">// Allow WATER on places where LAYOUT may occur</span>
  <span class="keyword">LAYOUT</span>.<span class="cons_Constructor">WATER</span> = <a href="#WATER_180_185" id="WATER_157_162" title="Defined at line 10, 17, 18">WATER</a>

<span class="keyword">lexical sorts</span>
  <a href="#WATER_157_162" id="WATER_180_185" title="Referenced at line 7">WATER</a>
  <a href="#WATERTOKEN_344_354" id="WATERTOKEN_188_198" title="Referenced at line 17, 28">WATERTOKEN</a>
  <a href="#WATERTOKENSTART_449_464" id="WATERTOKENSTART_201_216" title="Referenced at line 21">WATERTOKENSTART</a>
  <a href="#WATERTOKENSEPARATOR_365_384" id="WATERTOKENSEPARATOR_219_238" title="Referenced at line 18">WATERTOKENSEPARATOR</a>

<span class="keyword">lexical syntax</span>
  <span class="layout">// Separate water regions into smaller chunks for recovery costs calculation</span>
  <a href="#WATER_157_162" id="WATER_336_341" title="Referenced at line 7">WATER</a> = <a href="#WATERTOKEN_188_198" id="WATERTOKEN_344_354" title="Defined at line 11, 21">WATERTOKEN</a>
  <a href="#WATER_157_162" id="WATER_357_362" title="Referenced at line 7">WATER</a> = <a href="#WATERTOKENSEPARATOR_219_238" id="WATERTOKENSEPARATOR_365_384" title="Defined at line 13, 25">WATERTOKENSEPARATOR</a>

  <span class="layout">// Allow to skip over identifier strings</span>
  <a href="#WATERTOKEN_344_354" id="WATERTOKEN_431_441" title="Referenced at line 17, 28">WATERTOKEN</a>      = <a href="#WATERTOKENSTART_201_216" id="WATERTOKENSTART_449_464" title="Defined at line 12, 22">WATERTOKENSTART</a> [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="#WATERTOKENSTART_449_464" id="WATERTOKENSTART_482_497" title="Referenced at line 21">WATERTOKENSTART</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_] {<span class="keyword">recover</span>}

  <span class="layout">// Allow to skip over special characters that are neither part of identifiers nor whitespace characters</span>
  <a href="#WATERTOKENSEPARATOR_365_384" id="WATERTOKENSEPARATOR_633_652" title="Referenced at line 18">WATERTOKENSEPARATOR</a> = ~[<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\ \t<span class="cons_Decimal">\12</span>\r\n\*] {<span class="keyword">recover</span>}

<span class="keyword">lexical restrictions</span>
  <a href="#WATERTOKEN_188_198" id="WATERTOKEN_717_727" title="Defined at line 11, 21">WATERTOKEN</a> -/- [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
</code></pre></td></tr></tbody></table></div>