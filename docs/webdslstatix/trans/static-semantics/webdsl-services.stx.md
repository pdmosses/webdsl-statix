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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-services_551_583" id="static-semantics/webdsl-services_7_39" title="Referenced at ../webdsl.stx line 22">static-semantics/webdsl-services</a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_51_85" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_89_121" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_125_148" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_159_164" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx#DeriveWebServices_470_487" id="DeriveWebServices_168_185" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Service-sig.stx line 24">DeriveWebServices</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_266_271" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_390_391" id="s_272_273" title="Referenced at line 15, 16, 19, 20">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Service-sig.stx#ServiceFunction_388_403" id="ServiceFunction_275_290" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Service-sig.stx line 23">ServiceFunction</a>(<span id="mods_291_295" title="Not referenced locally, nor via imports">mods</span>, <a href="#p_585_586" id="p_297_298" title="Referenced at line 20">p</a>, <a href="#args_418_422" id="args_300_304" title="Referenced at line 16, 17">args</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_306_311" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_547_552" id="stmts_312_317" title="Referenced at line 19">stmts</a>))) :- { <a href="#s_webservice_358_370" id="s_webservice_326_338" title="Referenced at line 15, 15, 17, 18">s_webservice</a> <a href="#s_body_493_499" id="s_body_339_345" title="Referenced at line 18, 18, 19">s_body</a> <a href="#ts_397_399" id="ts_346_348" title="Referenced at line 16, 17, 20">ts</a>}
    <span class="keyword">new</span> <a href="#s_webservice_326_338" id="s_webservice_358_370" title="Defined at line 14">s_webservice</a>, <a href="#s_webservice_326_338" id="s_webservice_372_384" title="Defined at line 14">s_webservice</a> -<a href="../webdsl.stx#F_1290_1291" id="F_386_387" title="Defined at ../webdsl.stx line 46">F</a>-&gt; <a href="#s_272_273" id="s_390_391" title="Defined at line 14">s</a>,
    <a href="#ts_346_348" id="ts_397_399" title="Defined at line 14">ts</a> == <a href="../actions/functions.stx#typesOfArgs_6612_6623" id="typesOfArgs_403_414" title="Defined at ../actions/functions.stx line 138">typesOfArgs</a>(<a href="#s_272_273" id="s_415_416" title="Defined at line 14">s</a>, <a href="#args_300_304" id="args_418_422" title="Defined at line 14">args</a>),
    <a href="../webdsl.stx#declareParameters_14585_14602" id="declareParameters_429_446" title="Defined at ../webdsl.stx line 332">declareParameters</a>(<a href="#s_webservice_326_338" id="s_webservice_447_459" title="Defined at line 14">s_webservice</a>, <a href="../actions/functions.stx#zipArgTypes_6882_6893" id="zipArgTypes_461_472" title="Defined at ../actions/functions.stx line 145">zipArgTypes</a>(<a href="#args_300_304" id="args_473_477" title="Defined at line 14">args</a>, <a href="#ts_346_348" id="ts_479_481" title="Defined at line 14">ts</a>)),
    <span class="keyword">new</span> <a href="#s_body_339_345" id="s_body_493_499" title="Defined at line 14">s_body</a>, <a href="#s_body_339_345" id="s_body_501_507" title="Defined at line 14">s_body</a> -<a href="../webdsl.stx#P_1226_1227" id="P_509_510" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_webservice_326_338" id="s_webservice_513_525" title="Defined at line 14">s_webservice</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_531_538" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_body_339_345" id="s_body_539_545" title="Defined at line 14">s_body</a>, <a href="#stmts_312_317" id="stmts_547_552" title="Defined at line 14">stmts</a>, <a href="../types/built-ins.stx#object_2954_2960" id="object_554_560" title="Defined at ../types/built-ins.stx line 84">object</a>(<a href="#s_272_273" id="s_561_562" title="Defined at line 14">s</a>)),
    <a href="../webdsl.stx#declarePage_5982_5993" id="declarePage_570_581" title="Defined at ../webdsl.stx line 163">declarePage</a>(<a href="#s_272_273" id="s_582_583" title="Defined at line 14">s</a>, <a href="#p_297_298" id="p_585_586" title="Defined at line 14">p</a>, <a href="#ts_346_348" id="ts_588_590" title="Defined at line 14">ts</a>).

  <span id="serviceModsOk_596_609" title="Not referenced locally, nor via imports">serviceModsOk</span> <span class="keyword">maps</span> <a href="#serviceModOk_642_654" id="serviceModOk_615_627" title="Defined at line 23">serviceModOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#serviceModOk_615_627" id="serviceModOk_642_654" title="Referenced at line 22, 24">serviceModOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_665_673" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a>
  <a href="#serviceModOk_642_654" id="serviceModOk_676_688" title="Defined at line 23">serviceModOk</a>(_, <a href="#m_724_725" id="m_692_693" title="Referenced at line 24">m</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Modifier [<a href="#m_692_693" id="m_724_725" title="Defined at line 24">m</a>] not allowed in a service definition].

</code></pre></td></tr></tbody></table></div>