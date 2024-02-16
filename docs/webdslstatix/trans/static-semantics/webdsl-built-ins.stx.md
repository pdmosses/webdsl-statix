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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="static-semantics/webdsl-built-ins_1_8" title="a definition with multiple references" data-urls="../webdsl-ac.stx/#static-semantics/webdsl-built-ins line 13_3; ../actions/built-ins.stx/#static-semantics/webdsl-built-ins line 5_3; ../entities/built-ins.stx/#static-semantics/webdsl-built-ins line 9_3; ../types/built-ins.stx/#static-semantics/webdsl-built-ins line 7_3"><span class="token sort_Id">static-semantics/webdsl-built-ins</span></button>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx/#static-semantics/actions/functions_1_8" id="static-semantics/actions/functions_4_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/actions/functions</span></a>

  <a href="../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_6_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <button class="modal-open" id="declareBuiltInFunction_10_3" title="a definition with multiple references" data-urls="#declareBuiltInFunction line 11_3; ../webdsl-ac.stx/#declareBuiltInFunction line 32_5, 33_5, 34_5; ../actions/built-ins.stx/#declareBuiltInFunction line 26_5, 27_5, 28_5, 29_5, 30_5, 31_5, 32_5, 33_5, 34_5, 35_5, 36_5, 37_5, 39_5, 40_5, 42_5, 44_5, 45_5, 46_5, 48_5, 50_5, 51_5, 52_5, 53_5, 55_5, 56_5, 57_5, 59_5, 60_5, 62_5, 63_5, 64_5, 65_5, 66_5, 67_5, 69_5; ../entities/built-ins.stx/#declareBuiltInFunction line 26_5, 27_5, 28_5"><span class="token sort_Id">declareBuiltInFunction</span></button> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_StringSort"><span class="keyword">string</span></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_10_50" title="a reference to a single-file definition"><span class="token sort_Id">TYPE</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_10_58" title="a reference to a single-file definition"><span class="token sort_Id">TYPE</span></a></span>
  <a href="#declareBuiltInFunction_10_3" id="declareBuiltInFunction_11_3" title="a reference to a single-file definition"><span class="token sort_Id">declareBuiltInFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_11_65" id="s_11_26" title="a definition with a single reference"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_11_68" id="f_11_29" title="a definition with a single reference"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><button class="modal-open" id="args_11_32" title="a definition with multiple references" data-urls="#args line 11_86, 11_93"><span class="token sort_Id">args</span></button></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_11_99" id="return_11_38" title="a definition with a single reference"><span class="token sort_Id">return</span></a></span><span class="operator">)</span> <span class="operator">:-</span> <a href="../webdsl.stx/#declareFunction_217_3" id="declareFunction_11_49" title="a reference to a single-file definition"><span class="token sort_Id">declareFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_11_26" id="s_11_65" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_11_29" id="f_11_68" title="a reference to a single-file definition"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../webdsl.stx/#BUILTIN_ORIGIN_39_5" id="BUILTIN_ORIGIN_11_71" title="a reference to a single-file definition"><span class="token sort_Id">BUILTIN_ORIGIN</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_11_32" id="args_11_86" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">)</span></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_11_32" id="args_11_93" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_11_38" id="return_11_99" title="a reference to a single-file definition"><span class="token sort_Id">return</span></a></span><span class="operator">).</span>

  <button class="modal-open" id="declBuiltInFunctionEntity_13_3" title="a definition with multiple references" data-urls="#declBuiltInFunctionEntity line 14_3; ../types/built-ins.stx/#declBuiltInFunctionEntity line 122_5, 125_5, 126_5, 127_5, 128_5, 132_5, 133_5, 134_5, 135_5, 136_5, 139_5, 140_5, 141_5, 142_5, 143_5"><span class="token sort_Id">declBuiltInFunctionEntity</span></button> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_StringSort"><span class="keyword">string</span></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_13_53" title="a reference to a single-file definition"><span class="token sort_Id">TYPE</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#TYPE_29_5" id="TYPE_13_61" title="a reference to a single-file definition"><span class="token sort_Id">TYPE</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../webdsl.stx/#BOOL_30_5" id="BOOL_13_68" title="a reference to a single-file definition"><span class="token sort_Id">BOOL</span></a></span>
  <a href="#declBuiltInFunctionEntity_13_3" id="declBuiltInFunctionEntity_14_3" title="a reference to a single-file definition"><span class="token sort_Id">declBuiltInFunctionEntity</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_24" id="s_14_29" title="a definition with a single reference"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_15_27" id="f_14_32" title="a definition with a single reference"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><button class="modal-open" id="args_14_35" title="a definition with multiple references" data-urls="#args line 15_45, 15_52"><span class="token sort_Id">args</span></button></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_15_58" id="return_14_41" title="a definition with a single reference"><span class="token sort_Id">return</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#static_15_66" id="static_14_49" title="a definition with a single reference"><span class="token sort_Id">static</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../actions/functions.stx/#declFunctionEntity_133_3" id="declFunctionEntity_15_5" title="a reference to a single-file definition"><span class="token sort_Id">declFunctionEntity</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_29" id="s_15_24" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_14_32" id="f_15_27" title="a reference to a single-file definition"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../webdsl.stx/#BUILTIN_ORIGIN_39_5" id="BUILTIN_ORIGIN_15_30" title="a reference to a single-file definition"><span class="token sort_Id">BUILTIN_ORIGIN</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_14_35" id="args_15_45" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">)</span></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_14_35" id="args_15_52" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#return_14_41" id="return_15_58" title="a reference to a single-file definition"><span class="token sort_Id">return</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#static_14_49" id="static_15_66" title="a reference to a single-file definition"><span class="token sort_Id">static</span></a></span><span class="operator">).</span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
