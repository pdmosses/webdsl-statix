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
<td class="code"><pre><code><span class="keyword">module</span> <span id="permissive-water_1_8" title="Not referenced">permissive-water</span>

<span class="layout">// Key idea: WATER is the inverse of LAYOUT</span>

<span class="keyword">context-free syntax</span>
  <span class="layout">// Allow WATER on places where LAYOUT may occur</span>
  <span class="keyword">LAYOUT</span>.<span class="cons_Constructor">WATER</span> = <a href="#WATER_10_3" id="WATER_7_18" title="Defined at line 10, 17, 18">WATER</a>

<span class="keyword">lexical sorts</span>
  <a href="#WATER_7_18" id="WATER_10_3" title="Referenced at line 7">WATER</a>
  <a href="#WATERTOKEN_17_11" id="WATERTOKEN_11_3" title="Referenced at line 17, 28">WATERTOKEN</a>
  <a href="#WATERTOKENSTART_21_21" id="WATERTOKENSTART_12_3" title="Referenced at line 21">WATERTOKENSTART</a>
  <a href="#WATERTOKENSEPARATOR_18_11" id="WATERTOKENSEPARATOR_13_3" title="Referenced at line 18">WATERTOKENSEPARATOR</a>

<span class="keyword">lexical syntax</span>
  <span class="layout">// Separate water regions into smaller chunks for recovery costs calculation</span>
  <a href="#WATER_7_18" id="WATER_17_3" title="Referenced at line 7">WATER</a> = <a href="#WATERTOKEN_11_3" id="WATERTOKEN_17_11" title="Defined at line 11, 21">WATERTOKEN</a>
  <a href="#WATER_7_18" id="WATER_18_3" title="Referenced at line 7">WATER</a> = <a href="#WATERTOKENSEPARATOR_13_3" id="WATERTOKENSEPARATOR_18_11" title="Defined at line 13, 25">WATERTOKENSEPARATOR</a>

  <span class="layout">// Allow to skip over identifier strings</span>
  <a href="#WATERTOKEN_17_11" id="WATERTOKEN_21_3" title="Referenced at line 17, 28">WATERTOKEN</a>      = <a href="#WATERTOKENSTART_12_3" id="WATERTOKENSTART_21_21" title="Defined at line 12, 22">WATERTOKENSTART</a> [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="#WATERTOKENSTART_21_21" id="WATERTOKENSTART_22_3" title="Referenced at line 21">WATERTOKENSTART</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_] {<span class="keyword">recover</span>}

  <span class="layout">// Allow to skip over special characters that are neither part of identifiers nor whitespace characters</span>
  <a href="#WATERTOKENSEPARATOR_18_11" id="WATERTOKENSEPARATOR_25_3" title="Referenced at line 18">WATERTOKENSEPARATOR</a> = ~[<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\ \t<span class="cons_Decimal">\12</span>\r\n\*] {<span class="keyword">recover</span>}

<span class="keyword">lexical restrictions</span>
  <a href="#WATERTOKEN_11_3" id="WATERTOKEN_28_3" title="Defined at line 11, 21">WATERTOKEN</a> -/- [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
