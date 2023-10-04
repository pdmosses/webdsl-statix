---
title: WebDSL-Dispatch-sig.stx
hide:
  - toc
---

# `WebDSL-Dispatch-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Dispatch-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Dispatch-sig.stx "The source file on GitHub"

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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Dispatch-sig_282_312" id="signatures/WebDSL-Dispatch-sig_7_37" title="Referenced at ../webdsl-statix-sig.stx line 11">signatures/WebDSL-Dispatch-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_49_77" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_80_106" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_109_138" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_141_165" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#DispatchEntry_339_352" id="DispatchEntry_190_203" title="Referenced at line 19, 28, 29, 30">DispatchEntry</a>
    <a href="#DispatchDefault_381_396" id="DispatchDefault_208_223" title="Referenced at line 20, 28, 31, 32">DispatchDefault</a>
    <a href="#DispatchNavigateCall_430_450" id="DispatchNavigateCall_228_248" title="Referenced at line 21, 35, 36, 37, 38">DispatchNavigateCall</a>
    <a href="#DispatchNavigate_480_496" id="DispatchNavigate_253_269" title="Referenced at line 22, 33, 35">DispatchNavigate</a>
    <a href="#DispatchNavigateButton_532_554" id="DispatchNavigateButton_274_296" title="Referenced at line 23, 34, 36">DispatchNavigateButton</a>

  <span class="keyword">constructors</span>
    <span id="DispatchEntry-Plhdr_317_336" title="Not referenced locally, nor via imports">DispatchEntry-Plhdr</span> : <a href="#DispatchEntry_190_203" id="DispatchEntry_339_352" title="Defined at line 12">DispatchEntry</a>
    <span id="DispatchDefault-Plhdr_357_378" title="Not referenced locally, nor via imports">DispatchDefault-Plhdr</span> : <a href="#DispatchDefault_208_223" id="DispatchDefault_381_396" title="Defined at line 13">DispatchDefault</a>
    <span id="DispatchNavigateCall-Plhdr_401_427" title="Not referenced locally, nor via imports">DispatchNavigateCall-Plhdr</span> : <a href="#DispatchNavigateCall_228_248" id="DispatchNavigateCall_430_450" title="Defined at line 14">DispatchNavigateCall</a>
    <span id="DispatchNavigate-Plhdr_455_477" title="Not referenced locally, nor via imports">DispatchNavigate-Plhdr</span> : <a href="#DispatchNavigate_253_269" id="DispatchNavigate_480_496" title="Defined at line 15">DispatchNavigate</a>
    <span id="DispatchNavigateButton-Plhdr_501_529" title="Not referenced locally, nor via imports">DispatchNavigateButton-Plhdr</span> : <a href="#DispatchNavigateButton_274_296" id="DispatchNavigateButton_532_554" title="Defined at line 16">DispatchNavigateButton</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span id="Dispatch_586_594" title="Not referenced locally, nor via imports">Dispatch</span> : <span class="keyword">list</span>(<a href="#DispatchEntry_190_203" id="DispatchEntry_602_615" title="Defined at line 12">DispatchEntry</a>) * <a href="#DispatchDefault_208_223" id="DispatchDefault_619_634" title="Defined at line 13">DispatchDefault</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_638_653" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="DispatchEntry_658_671" title="Not referenced locally, nor via imports">DispatchEntry</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_674_676" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_679_692" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_700_715" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#DispatchEntry_190_203" id="DispatchEntry_720_733" title="Defined at line 12">DispatchEntry</a>
    <span id="DispatchEntity_738_752" title="Not referenced locally, nor via imports">DispatchEntity</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_755_757" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_760_764" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_772_787" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#DispatchEntry_190_203" id="DispatchEntry_792_805" title="Defined at line 12">DispatchEntry</a>
    <span id="DispatchDefault_810_825" title="Not referenced locally, nor via imports">DispatchDefault</span> : <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_833_848" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#DispatchDefault_208_223" id="DispatchDefault_853_868" title="Defined at line 13">DispatchDefault</a>
    <span id="DispatchDefaultNone_873_892" title="Not referenced locally, nor via imports">DispatchDefaultNone</span> : <a href="#DispatchDefault_208_223" id="DispatchDefault_895_910" title="Defined at line 13">DispatchDefault</a>
    <span id="DispatchNavigate2TemplateElement_915_947" title="Not referenced locally, nor via imports">DispatchNavigate2TemplateElement</span> : <a href="#DispatchNavigate_253_269" id="DispatchNavigate_950_966" title="Defined at line 15">DispatchNavigate</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_970_985" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="DispatchNavigateButton2TemplateElement_990_1028" title="Not referenced locally, nor via imports">DispatchNavigateButton2TemplateElement</span> : <a href="#DispatchNavigateButton_274_296" id="DispatchNavigateButton_1031_1053" title="Defined at line 16">DispatchNavigateButton</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1057_1072" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="DispatchNavigate_1077_1093" title="Not referenced locally, nor via imports">DispatchNavigate</span> : <span class="keyword">list</span>(<a href="#DispatchNavigateCall_228_248" id="DispatchNavigateCall_1101_1121" title="Defined at line 14">DispatchNavigateCall</a>) * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1130_1145" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#DispatchNavigate_253_269" id="DispatchNavigate_1150_1166" title="Defined at line 15">DispatchNavigate</a>
    <span id="DispatchNavigateButton_1171_1193" title="Not referenced locally, nor via imports">DispatchNavigateButton</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1196_1199" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#DispatchNavigateCall_228_248" id="DispatchNavigateCall_1207_1227" title="Defined at line 14">DispatchNavigateCall</a>) -&gt; <a href="#DispatchNavigateButton_274_296" id="DispatchNavigateButton_1232_1254" title="Defined at line 16">DispatchNavigateButton</a>
    <span id="DispatchNavigateCall_1259_1279" title="Not referenced locally, nor via imports">DispatchNavigateCall</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1282_1284" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1292_1295" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="#DispatchNavigateCall_228_248" id="DispatchNavigateCall_1300_1320" title="Defined at line 14">DispatchNavigateCall</a>
    <span id="DispatchNavigateCallNoArg_1325_1350" title="Not referenced locally, nor via imports">DispatchNavigateCallNoArg</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1353_1355" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#DispatchNavigateCall_228_248" id="DispatchNavigateCall_1359_1379" title="Defined at line 14">DispatchNavigateCall</a>
</code></pre></td></tr></tbody></table></div>