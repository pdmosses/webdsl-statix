---
title: webdsl-services.stx
hide:
  - toc
---

# `webdsl-services.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-services.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-services.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-services.stx "The source file on GitHub"

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
16
17
18
19
20
21
22
23
24
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx/#static-semantics/webdsl-services_22_3" id="static-semantics/webdsl-services_1_8" title="a definition with a single reference"><span class="token sort_Id">static-semantics/webdsl-services</span></a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx/#static-semantics/actions/functions_1_8" id="static-semantics/actions/functions_4_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/actions/functions</span></a>

  <a href="../types/built-ins.stx/#static-semantics/types/built-ins_1_8" id="static-semantics/types/built-ins_6_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/types/built-ins</span></a>

  <a href="../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_8_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <a href="../webdsl.stx/#defOk_356_3" id="defOk_12_3" title="a reference to a single-file definition"><span class="token sort_Id">defOk</span></a><span class="operator">(_,</span> <span class="cons_Op"><a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx/#DeriveWebServices_24_5" id="DeriveWebServices_12_12" title="a reference to a single-file definition"><span class="token sort_Id">DeriveWebServices</span></a><span class="operator">(_,</span> <span class="operator">_)</span></span><span class="operator">)</span> <span class="operator">:-</span> <span class="keyword">try</span> <span class="operator">{</span> <span class="keyword">false</span> <span class="operator">}</span> <span class="operator">|</span> <span class="token sort_Id">warning</span> <span class="operator">$[</span><span class="cons_Text">This definition is not yet implemented</span><span class="operator">].</span>

  <a href="../webdsl.stx/#defOk_356_3" id="defOk_14_3" title="a reference to a single-file definition"><span class="token sort_Id">defOk</span></a><span class="operator">(</span><span class="cons_Var"><button class="modal-open" id="s_14_9" title="a definition with multiple references" data-urls="#s line 15_41, 16_23, 19_35, 20_17"><span class="token sort_Id">s</span></button></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx/#ServiceFunction_23_5" id="ServiceFunction_14_12" title="a reference to a single-file definition"><span class="token sort_Id">ServiceFunction</span></a><span class="operator">(</span><span class="cons_Var"><span id="mods_14_28" title="a definition with no references"><span class="token sort_Id">mods</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#p_20_20" id="p_14_34" title="a definition with a single reference"><span class="token sort_Id">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><button class="modal-open" id="args_14_37" title="a definition with multiple references" data-urls="#args line 16_26, 17_49"><span class="token sort_Id">args</span></button></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#Block_81_5" id="Block_14_43" title="a reference to a single-file definition"><span class="token sort_Id">Block</span></a><span class="operator">(</span><span class="cons_Var"><a href="#stmts_19_21" id="stmts_14_49" title="a definition with a single reference"><span class="token sort_Id">stmts</span></a></span><span class="operator">)</span></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">:-</span> <span class="operator">{</span> <span class="cons_Var"><button class="modal-open" id="s_webservice_14_63" title="a definition with multiple references" data-urls="#s_webservice line 15_9, 15_23, 17_23, 18_29"><span class="token sort_Id">s_webservice</span></button></span> <span class="cons_Var"><button class="modal-open" id="s_body_14_76" title="a definition with multiple references" data-urls="#s_body line 18_9, 18_17, 19_13"><span class="token sort_Id">s_body</span></button></span> <span class="cons_Var"><button class="modal-open" id="ts_14_83" title="a definition with multiple references" data-urls="#ts line 16_5, 17_55, 20_23"><span class="token sort_Id">ts</span></button></span><span class="operator">}</span>
    <span class="keyword">new</span> <span class="cons_Var"><a href="#s_webservice_14_63" id="s_webservice_15_9" title="a reference to a single-file definition"><span class="token sort_Id">s_webservice</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_webservice_14_63" id="s_webservice_15_23" title="a reference to a single-file definition"><span class="token sort_Id">s_webservice</span></a></span> <span class="operator">-</span><span class="cons_Label"><a href="../webdsl.stx/#F_46_7" id="F_15_37" title="a reference to a single-file definition"><span class="token sort_Id">F</span></a></span><span class="operator">-&gt;</span> <span class="cons_Var"><a href="#s_14_9" id="s_15_41" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span>
    <span class="cons_Var"><a href="#ts_14_83" id="ts_16_5" title="a reference to a single-file definition"><span class="token sort_Id">ts</span></a></span> <span class="operator">==</span> <a href="../actions/functions.stx/#typesOfArgs_138_3" id="typesOfArgs_16_11" title="a reference to a single-file definition"><span class="token sort_Id">typesOfArgs</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_9" id="s_16_23" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_14_37" id="args_16_26" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">),</span>
    <a href="../webdsl.stx/#declareParameters_332_3" id="declareParameters_17_5" title="a reference to a single-file definition"><span class="token sort_Id">declareParameters</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_webservice_14_63" id="s_webservice_17_23" title="a reference to a single-file definition"><span class="token sort_Id">s_webservice</span></a></span><span class="operator">,</span> <a href="../actions/functions.stx/#zipArgTypes_145_3" id="zipArgTypes_17_37" title="a reference to a single-file definition"><span class="token sort_Id">zipArgTypes</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_14_37" id="args_17_49" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#ts_14_83" id="ts_17_55" title="a reference to a single-file definition"><span class="token sort_Id">ts</span></a></span><span class="operator">)),</span>
    <span class="keyword">new</span> <span class="cons_Var"><a href="#s_body_14_76" id="s_body_18_9" title="a reference to a single-file definition"><span class="token sort_Id">s_body</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_body_14_76" id="s_body_18_17" title="a reference to a single-file definition"><span class="token sort_Id">s_body</span></a></span> <span class="operator">-</span><span class="cons_Label"><a href="../webdsl.stx/#P_45_7" id="P_18_25" title="a reference to a single-file definition"><span class="token sort_Id">P</span></a></span><span class="operator">-&gt;</span> <span class="cons_Var"><a href="#s_webservice_14_63" id="s_webservice_18_29" title="a reference to a single-file definition"><span class="token sort_Id">s_webservice</span></a></span><span class="operator">,</span>
    <a href="../webdsl.stx/#stmtsOk_363_3" id="stmtsOk_19_5" title="a reference to a single-file definition"><span class="token sort_Id">stmtsOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_body_14_76" id="s_body_19_13" title="a reference to a single-file definition"><span class="token sort_Id">s_body</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#stmts_14_49" id="stmts_19_21" title="a reference to a single-file definition"><span class="token sort_Id">stmts</span></a></span><span class="operator">,</span> <a href="../types/built-ins.stx/#object_84_3" id="object_19_28" title="a reference to a single-file definition"><span class="token sort_Id">object</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_9" id="s_19_35" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)),</span>
    <a href="../webdsl.stx/#declarePage_163_3" id="declarePage_20_5" title="a reference to a single-file definition"><span class="token sort_Id">declarePage</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_9" id="s_20_17" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#p_14_34" id="p_20_20" title="a reference to a single-file definition"><span class="token sort_Id">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#ts_14_83" id="ts_20_23" title="a reference to a single-file definition"><span class="token sort_Id">ts</span></a></span><span class="operator">).</span>

  <span id="serviceModsOk_22_3" title="a definition with no references"><span class="token sort_Id">serviceModsOk</span></span> <span class="keyword">maps</span> <a href="#serviceModOk_23_3" id="serviceModOk_22_22" title="a reference to a single-file definition"><span class="token sort_Id">serviceModOk</span></a><span class="operator">(*,</span> <span class="keyword">list</span><span class="operator">(*))</span>
  <button class="modal-open" id="serviceModOk_23_3" title="a definition with multiple references" data-urls="#serviceModOk line 22_22, 24_3"><span class="token sort_Id">serviceModOk</span></button> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx/#Modifier_14_5" id="Modifier_23_26" title="a reference to a single-file definition"><span class="token sort_Id">Modifier</span></a></span>
  <a href="#serviceModOk_23_3" id="serviceModOk_24_3" title="a reference to a single-file definition"><span class="token sort_Id">serviceModOk</span></a><span class="operator">(_,</span> <span class="cons_Var"><a href="#m_24_51" id="m_24_19" title="a definition with a single reference"><span class="token sort_Id">m</span></a></span><span class="operator">)</span> <span class="operator">:-</span> <span class="keyword">false</span> <span class="operator">|</span> <span class="keyword">error</span> <span class="operator">$[</span><span class="cons_Text">Modifier </span><span class="operator">[</span><span class="cons_Var"><a href="#m_24_19" id="m_24_51" title="a reference to a single-file definition"><span class="token sort_Id">m</span></a></span><span class="operator">]</span><span class="cons_Text"> not allowed in a service definition</span><span class="operator">].</span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
