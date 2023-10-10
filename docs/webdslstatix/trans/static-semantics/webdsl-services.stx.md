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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx/#static-semantics/webdsl-services_551_583" id="static-semantics/webdsl-services_7_39" title="Referenced at ../webdsl.stx line 22"><span class="token sort_ModuleID">static-semantics/webdsl-services</span></a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx/#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_51_85" title="Defined at ../actions/functions.stx line 1"><span class="token sort_ModuleID">static-semantics/actions/functions</span></a>

  <a href="../types/built-ins.stx/#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_89_121" title="Defined at ../types/built-ins.stx line 1"><span class="token sort_ModuleID">static-semantics/types/built-ins</span></a>

  <a href="../webdsl.stx/#static-semantics/webdsl_7_30" id="static-semantics/webdsl_125_148" title="Defined at ../webdsl.stx line 1"><span class="token sort_ModuleID">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <a href="../webdsl.stx/#defOk_15473_15478" id="defOk_159_164" title="Defined at ../webdsl.stx line 356"><span class="token sort_ConstraintId">defOk</span></a><span class="operator">(_,</span> <a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx/#DeriveWebServices_470_487" id="DeriveWebServices_168_185" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Service-sig.stx line 24"><span class="token sort_OpId">DeriveWebServices</span></a><span class="operator">(_,</span> <span class="operator">_))</span> <span class="operator">:-</span> <span class="keyword">try</span> <span class="operator">{</span> <span class="keyword">false</span> <span class="operator">}</span> <span class="operator">|</span> <span class="token sort_ConstraintId">warning</span> <span class="operator">$[</span><span class="cons_Text">This definition is not yet implemented</span><span class="operator">].</span>

  <a href="../webdsl.stx/#defOk_15473_15478" id="defOk_266_271" title="Defined at ../webdsl.stx line 356"><span class="token sort_ConstraintId">defOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_390_391" id="s_272_273" title="Referenced at line 15, 16, 19, 20"><span class="token sort_ConstraintId">s</span></a></span><span class="operator">,</span> <a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx/#ServiceFunction_388_403" id="ServiceFunction_275_290" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Service-sig.stx line 23"><span class="token sort_OpId">ServiceFunction</span></a><span class="operator">(</span><span class="cons_Var"><span id="mods_291_295" title="Not referenced locally, nor via imports"><span class="token sort_ConstraintId">mods</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#p_585_586" id="p_297_298" title="Referenced at line 20"><span class="token sort_ConstraintId">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_418_422" id="args_300_304" title="Referenced at line 16, 17"><span class="token sort_ConstraintId">args</span></a></span><span class="operator">,</span> <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#Block_2123_2128" id="Block_306_311" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81"><span class="token sort_OpId">Block</span></a><span class="operator">(</span><span class="cons_Var"><a href="#stmts_547_552" id="stmts_312_317" title="Referenced at line 19"><span class="token sort_ConstraintId">stmts</span></a></span><span class="operator">)))</span> <span class="operator">:-</span> <span class="operator">{</span> <span class="cons_Var"><a href="#s_webservice_358_370" id="s_webservice_326_338" title="Referenced at line 15, 15, 17, 18"><span class="token sort_ConstraintId">s_webservice</span></a></span> <span class="cons_Var"><a href="#s_body_493_499" id="s_body_339_345" title="Referenced at line 18, 18, 19"><span class="token sort_ConstraintId">s_body</span></a></span> <span class="cons_Var"><a href="#ts_397_399" id="ts_346_348" title="Referenced at line 16, 17, 20"><span class="token sort_ConstraintId">ts</span></a></span><span class="operator">}</span>
    <span class="keyword">new</span> <span class="cons_Var"><a href="#s_webservice_326_338" id="s_webservice_358_370" title="Defined at line 14"><span class="token sort_ConstraintId">s_webservice</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_webservice_326_338" id="s_webservice_372_384" title="Defined at line 14"><span class="token sort_ConstraintId">s_webservice</span></a></span> <span class="operator">-</span><a href="../webdsl.stx/#F_1290_1291" id="F_386_387" title="Defined at ../webdsl.stx line 46"><span class="token sort_OpId">F</span></a><span class="operator">-&gt;</span> <span class="cons_Var"><a href="#s_272_273" id="s_390_391" title="Defined at line 14"><span class="token sort_ConstraintId">s</span></a></span><span class="operator">,</span>
    <span class="cons_Var"><a href="#ts_346_348" id="ts_397_399" title="Defined at line 14"><span class="token sort_ConstraintId">ts</span></a></span> <span class="operator">==</span> <a href="../actions/functions.stx/#typesOfArgs_6612_6623" id="typesOfArgs_403_414" title="Defined at ../actions/functions.stx line 138"><span class="token sort_ConstraintId">typesOfArgs</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_272_273" id="s_415_416" title="Defined at line 14"><span class="token sort_ConstraintId">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_300_304" id="args_418_422" title="Defined at line 14"><span class="token sort_ConstraintId">args</span></a></span><span class="operator">),</span>
    <a href="../webdsl.stx/#declareParameters_14585_14602" id="declareParameters_429_446" title="Defined at ../webdsl.stx line 332"><span class="token sort_ConstraintId">declareParameters</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_webservice_326_338" id="s_webservice_447_459" title="Defined at line 14"><span class="token sort_ConstraintId">s_webservice</span></a></span><span class="operator">,</span> <a href="../actions/functions.stx/#zipArgTypes_6882_6893" id="zipArgTypes_461_472" title="Defined at ../actions/functions.stx line 145"><span class="token sort_ConstraintId">zipArgTypes</span></a><span class="operator">(</span><span class="cons_Var"><a href="#args_300_304" id="args_473_477" title="Defined at line 14"><span class="token sort_ConstraintId">args</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#ts_346_348" id="ts_479_481" title="Defined at line 14"><span class="token sort_ConstraintId">ts</span></a></span><span class="operator">)),</span>
    <span class="keyword">new</span> <span class="cons_Var"><a href="#s_body_339_345" id="s_body_493_499" title="Defined at line 14"><span class="token sort_ConstraintId">s_body</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_body_339_345" id="s_body_501_507" title="Defined at line 14"><span class="token sort_ConstraintId">s_body</span></a></span> <span class="operator">-</span><a href="../webdsl.stx/#P_1226_1227" id="P_509_510" title="Defined at ../webdsl.stx line 45"><span class="token sort_OpId">P</span></a><span class="operator">-&gt;</span> <span class="cons_Var"><a href="#s_webservice_326_338" id="s_webservice_513_525" title="Defined at line 14"><span class="token sort_ConstraintId">s_webservice</span></a></span><span class="operator">,</span>
    <a href="../webdsl.stx/#stmtsOk_15878_15885" id="stmtsOk_531_538" title="Defined at ../webdsl.stx line 363"><span class="token sort_ConstraintId">stmtsOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_body_339_345" id="s_body_539_545" title="Defined at line 14"><span class="token sort_ConstraintId">s_body</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#stmts_312_317" id="stmts_547_552" title="Defined at line 14"><span class="token sort_ConstraintId">stmts</span></a></span><span class="operator">,</span> <a href="../types/built-ins.stx/#object_2954_2960" id="object_554_560" title="Defined at ../types/built-ins.stx line 84"><span class="token sort_ConstraintId">object</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_272_273" id="s_561_562" title="Defined at line 14"><span class="token sort_ConstraintId">s</span></a></span><span class="operator">)),</span>
    <a href="../webdsl.stx/#declarePage_5982_5993" id="declarePage_570_581" title="Defined at ../webdsl.stx line 163"><span class="token sort_ConstraintId">declarePage</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_272_273" id="s_582_583" title="Defined at line 14"><span class="token sort_ConstraintId">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#p_297_298" id="p_585_586" title="Defined at line 14"><span class="token sort_ConstraintId">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#ts_346_348" id="ts_588_590" title="Defined at line 14"><span class="token sort_ConstraintId">ts</span></a></span><span class="operator">).</span>

  <span id="serviceModsOk_596_609" title="Not referenced locally, nor via imports"><span class="token sort_ConstraintId">serviceModsOk</span></span> <span class="keyword">maps</span> <a href="#serviceModOk_642_654" id="serviceModOk_615_627" title="Defined at line 23"><span class="token sort_ConstraintId">serviceModOk</span></a><span class="operator">(*,</span> <span class="keyword">list</span><span class="operator">(*))</span>
  <a href="#serviceModOk_615_627" id="serviceModOk_642_654" title="Referenced at line 22, 24"><span class="token sort_ConstraintId">serviceModOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort">scope</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx/#Modifier_243_251" id="Modifier_665_673" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14"><span class="token sort_OpId">Modifier</span></a></span>
  <a href="#serviceModOk_642_654" id="serviceModOk_676_688" title="Defined at line 23"><span class="token sort_ConstraintId">serviceModOk</span></a><span class="operator">(_,</span> <span class="cons_Var"><a href="#m_724_725" id="m_692_693" title="Referenced at line 24"><span class="token sort_ConstraintId">m</span></a></span><span class="operator">)</span> <span class="operator">:-</span> <span class="keyword">false</span> <span class="operator">|</span> <span class="keyword">error</span> <span class="operator">$[</span><span class="cons_Text">Modifier </span><span class="operator">[</span><span class="cons_Var"><a href="#m_692_693" id="m_724_725" title="Defined at line 24"><span class="token sort_ConstraintId">m</span></a></span><span class="operator">]</span><span class="cons_Text"> not allowed in a service definition</span><span class="operator">].</span>

</code></pre></td></tr></tbody></table></div>