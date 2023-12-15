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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="static-semantics/webdsl-built-ins_1_8" title="Multi-file references" data-urls="../webdsl-ac.stx/#static-semantics/webdsl-built-ins_13_3 line 13; ../actions/built-ins.stx/#static-semantics/webdsl-built-ins_5_3 line 5; ../entities/built-ins.stx/#static-semantics/webdsl-built-ins_9_3 line 9; ../types/built-ins.stx/#static-semantics/webdsl-built-ins_7_3 line 7"><span class="token sort_Id">static-semantics/webdsl-built-ins</span></button>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx/#static-semantics/actions/functions_1_8" id="static-semantics/actions/functions_4_3" title="Defined at ../actions/functions.stx line 1"><span class="token sort_Id">static-semantics/actions/functions</span></a>

  <a href="../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_6_3" title="Defined at ../webdsl.stx line 1"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <button class="modal-open" id="declareBuiltInFunction_10_3" title="Multi-file references" data-urls="#declareBuiltInFunction_11_3 line 11; ../webdsl-ac.stx/#declareBuiltInFunction_32_5 line 32, 33, 34; ../actions/built-ins.stx/#declareBuiltInFunction_26_5 line 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 42, 44, 45, 46, 48, 50, 51, 52, 53, 55, 56, 57, 59, 60, 62, 63, 64, 65, 66, 67, 69; ../entities/built-ins.stx/#declareBuiltInFunction_26_5 line 26, 27, 28"><span class="token sort_Id">declareBuiltInFunction</span></button> <span class="operator">:</span> <span class="cons_ScopeSort">scope</span> <span class="operator">*</span> <span class="cons_StringSort">string</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_10_50" title="Defined at ../webdsl.stx line 29"><span class="token sort_Id">TYPE</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_10_58" title="Defined at ../webdsl.stx line 29"><span class="token sort_Id">TYPE</span></a></span>
  <a href="#declareBuiltInFunction_10_3" id="declareBuiltInFunction_11_3" title="Defined at line 10"><span class="token sort_Id">declareBuiltInFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_11_65" id="s_11_26" title="Referenced at line 11"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_11_68" id="f_11_29" title="Referenced at line 11"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_11_86" id="args_11_32" title="Referenced at line 11"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_11_99" id="return_11_38" title="Referenced at line 11"><span class="token sort_Id">return</span></a></span><span class="operator">)</span> <span class="operator">:-</span> <a href="../webdsl.stx/#declareFunction_217_3" id="declareFunction_11_49" title="Defined at ../webdsl.stx line 217"><span class="token sort_Id">declareFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_11_26" id="s_11_65" title="Defined at line 11"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_11_29" id="f_11_68" title="Defined at line 11"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../webdsl.stx/#BUILTIN_ORIGIN_39_5" id="BUILTIN_ORIGIN_11_71" title="Defined at ../webdsl.stx line 39"><span class="token sort_Id">BUILTIN_ORIGIN</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_11_32" id="args_11_86" title="Defined at line 11"><span class="token sort_Id">args</span></a></span>)</span><span class="operator">,</span> <span class="cons_Var"><a href="#args_11_32" id="args_11_93" title="Defined at line 11"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_11_38" id="return_11_99" title="Defined at line 11"><span class="token sort_Id">return</span></a></span><span class="operator">).</span>

  <button class="modal-open" id="declBuiltInFunctionEntity_13_3" title="Multi-file references" data-urls="#declBuiltInFunctionEntity_14_3 line 14; ../types/built-ins.stx/#declBuiltInFunctionEntity_122_5 line 122, 125, 126, 127, 128, 132, 133, 134, 135, 136, 139, 140, 141, 142, 143"><span class="token sort_Id">declBuiltInFunctionEntity</span></button> <span class="operator">:</span> <span class="cons_ScopeSort">scope</span> <span class="operator">*</span> <span class="cons_StringSort">string</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_13_53" title="Defined at ../webdsl.stx line 29"><span class="token sort_Id">TYPE</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_13_61" title="Defined at ../webdsl.stx line 29"><span class="token sort_Id">TYPE</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#BOOL_30_5" id="BOOL_13_68" title="Defined at ../webdsl.stx line 30"><span class="token sort_Id">BOOL</span></a></span>
  <a href="#declBuiltInFunctionEntity_13_3" id="declBuiltInFunctionEntity_14_3" title="Defined at line 13"><span class="token sort_Id">declBuiltInFunctionEntity</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_24" id="s_14_29" title="Referenced at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_15_27" id="f_14_32" title="Referenced at line 15"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_15_45" id="args_14_35" title="Referenced at line 15"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_15_58" id="return_14_41" title="Referenced at line 15"><span class="token sort_Id">return</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#static_15_66" id="static_14_49" title="Referenced at line 15"><span class="token sort_Id">static</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../actions/functions.stx/#declFunctionEntity_133_3" id="declFunctionEntity_15_5" title="Defined at ../actions/functions.stx line 133"><span class="token sort_Id">declFunctionEntity</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_29" id="s_15_24" title="Defined at line 14"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_14_32" id="f_15_27" title="Defined at line 14"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../webdsl.stx/#BUILTIN_ORIGIN_39_5" id="BUILTIN_ORIGIN_15_30" title="Defined at ../webdsl.stx line 39"><span class="token sort_Id">BUILTIN_ORIGIN</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_14_35" id="args_15_45" title="Defined at line 14"><span class="token sort_Id">args</span></a></span>)</span><span class="operator">,</span> <span class="cons_Var"><a href="#args_14_35" id="args_15_52" title="Defined at line 14"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_14_41" id="return_15_58" title="Defined at line 14"><span class="token sort_Id">return</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#static_14_49" id="static_15_66" title="Defined at line 14"><span class="token sort_Id">static</span></a></span><span class="operator">).</span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
