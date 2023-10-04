---
title: webdsl-built-ins.stx
hide:
  - toc
---

# `webdsl-built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-built-ins.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-ac.stx#static-semantics/webdsl-built-ins_232_265" id="static-semantics/webdsl-built-ins_7_40" title="Referenced at ../webdsl-ac.stx line 13; ../actions/built-ins.stx line 5; ../entities/built-ins.stx line 9; ../types/built-ins.stx line 7">static-semantics/webdsl-built-ins</a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_52_86" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_90_113" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="#declareBuiltInFunction_186_208" id="declareBuiltInFunction_124_146" title="Referenced at line 11; ../webdsl-ac.stx line 32, 33, 34; ../actions/built-ins.stx line 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 42, 44, 45, 46, 48, 50, 51, 52, 53, 55, 56, 57, 59, 60, 62, 63, 64, 65, 66, 67, 69; ../entities/built-ins.stx line 26, 27, 28">declareBuiltInFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_171_175" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_179_183" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#declareBuiltInFunction_124_146" id="declareBuiltInFunction_186_208" title="Defined at line 10">declareBuiltInFunction</a>(<a href="#s_248_249" id="s_209_210" title="Referenced at line 11">s</a>, <a href="#f_251_252" id="f_212_213" title="Referenced at line 11">f</a>, <a href="#args_269_273" id="args_215_219" title="Referenced at line 11, 11">args</a>, <a href="#return_282_288" id="return_221_227" title="Referenced at line 11">return</a>) :- <a href="../webdsl.stx#declareFunction_8746_8761" id="declareFunction_232_247" title="Defined at ../webdsl.stx line 217">declareFunction</a>(<a href="#s_209_210" id="s_248_249" title="Defined at line 11">s</a>, <a href="#f_212_213" id="f_251_252" title="Defined at line 11">f</a>, <a href="../webdsl.stx#BUILTIN_ORIGIN_964_978" id="BUILTIN_ORIGIN_254_268" title="Defined at ../webdsl.stx line 39">BUILTIN_ORIGIN</a>(<a href="#args_215_219" id="args_269_273" title="Defined at line 11">args</a>), <a href="#args_215_219" id="args_276_280" title="Defined at line 11">args</a>, <a href="#return_221_227" id="return_282_288" title="Defined at line 11">return</a>).

  <a href="#declBuiltInFunctionEntity_366_391" id="declBuiltInFunctionEntity_294_319" title="Referenced at line 14; ../types/built-ins.stx line 122, 125, 126, 127, 128, 132, 133, 134, 135, 136, 139, 140, 141, 142, 143">declBuiltInFunctionEntity</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_344_348" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_352_356" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_359_363" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_366_391" title="Defined at line 13">declBuiltInFunctionEntity</a>(<a href="#s_446_447" id="s_392_393" title="Referenced at line 15">s</a>, <a href="#f_449_450" id="f_395_396" title="Referenced at line 15">f</a>, <a href="#args_467_471" id="args_398_402" title="Referenced at line 15, 15">args</a>, <a href="#return_480_486" id="return_404_410" title="Referenced at line 15">return</a>, <a href="#static_488_494" id="static_412_418" title="Referenced at line 15">static</a>) :-
    <a href="../actions/functions.stx#declFunctionEntity_6277_6295" id="declFunctionEntity_427_445" title="Defined at ../actions/functions.stx line 133">declFunctionEntity</a>(<a href="#s_392_393" id="s_446_447" title="Defined at line 14">s</a>, <a href="#f_395_396" id="f_449_450" title="Defined at line 14">f</a>, <a href="../webdsl.stx#BUILTIN_ORIGIN_964_978" id="BUILTIN_ORIGIN_452_466" title="Defined at ../webdsl.stx line 39">BUILTIN_ORIGIN</a>(<a href="#args_398_402" id="args_467_471" title="Defined at line 14">args</a>), <a href="#args_398_402" id="args_474_478" title="Defined at line 14">args</a>, <a href="#return_404_410" id="return_480_486" title="Defined at line 14">return</a>, <a href="#static_412_418" id="static_488_494" title="Defined at line 14">static</a>).
</code></pre></td></tr></tbody></table></div>