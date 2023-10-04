---
title: WebDSL-Attributes-sig.stx
hide:
  - toc
---

# `WebDSL-Attributes-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Attributes-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Attributes-sig.stx "The source file on GitHub"

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
39
40
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-Expand-sig.stx#signatures/WebDSL-Attributes-sig_200_232" id="signatures/WebDSL-Attributes-sig_7_39" title="Referenced at ../WebDSL-Expand-sig.stx line 9; ../WebDSL-JavaScript-sig.stx line 5; ../webdsl-statix-sig.stx line 7; ../WebDSL-UI-sig.stx line 5; ../WebDSL-XML-sig.stx line 6">signatures/WebDSL-Attributes-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_51_79" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_82_111" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_114_140" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_143_167" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#AttributeSelection_374_392" id="AttributeSelection_192_210" title="Referenced at line 20, 37, 38, 39, 40">AttributeSelection</a>
    <a href="#AttributeCollectionOverride_433_460" id="AttributeCollectionOverride_215_242" title="Referenced at line 21, 29, 35, 36">AttributeCollectionOverride</a>
    <a href="#AttributeElem_487_500" id="AttributeElem_247_260" title="Referenced at line 22, 29, 30, 31, 32">AttributeElem</a>
    <a href="#AttributeIncludeIgnore_536_558" id="AttributeIncludeIgnore_265_287" title="Referenced at line 23, 31, 33, 34">AttributeIncludeIgnore</a>
    <a href="#Attribute_581_590" id="Attribute_292_301" title="Referenced at line 24, 40; ../WebDSL-Expand-sig.stx line 46, 46; ../WebDSL-JavaScript-sig.stx line 24, 25; ../WebDSL-UI-sig.stx line 253, 254; ../WebDSL-XML-sig.stx line 28, 29, 30, 32, 32, 33, 33, 33, 34, 35; ../../../../trans/static-semantics/ui/attributes.stx line 30">Attribute</a>
    <a href="#AttributeId_735_746" id="AttributeId_306_317" title="Referenced at line 30, 31, 32, 34, 37, 38">AttributeId</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="AttributeSelection-Plhdr_347_371" title="Not referenced locally, nor via imports">AttributeSelection-Plhdr</span> : <a href="#AttributeSelection_192_210" id="AttributeSelection_374_392" title="Defined at line 12">AttributeSelection</a>
    <span id="AttributeCollectionOverride-Plhdr_397_430" title="Not referenced locally, nor via imports">AttributeCollectionOverride-Plhdr</span> : <a href="#AttributeCollectionOverride_215_242" id="AttributeCollectionOverride_433_460" title="Defined at line 13">AttributeCollectionOverride</a>
    <span id="AttributeElem-Plhdr_465_484" title="Not referenced locally, nor via imports">AttributeElem-Plhdr</span> : <a href="#AttributeElem_247_260" id="AttributeElem_487_500" title="Defined at line 14">AttributeElem</a>
    <span id="AttributeIncludeIgnore-Plhdr_505_533" title="Not referenced locally, nor via imports">AttributeIncludeIgnore-Plhdr</span> : <a href="#AttributeIncludeIgnore_265_287" id="AttributeIncludeIgnore_536_558" title="Defined at line 15">AttributeIncludeIgnore</a>
    <span id="Attribute-Plhdr_563_578" title="Not referenced locally, nor via imports">Attribute-Plhdr</span> : <a href="#Attribute_292_301" id="Attribute_581_590" title="Defined at line 16">Attribute</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributeCollection_2685_2704" id="AttributeCollection_622_641" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 71, 74">AttributeCollection</a> : <a href="#AttributeCollectionOverride_215_242" id="AttributeCollectionOverride_644_671" title="Defined at line 13">AttributeCollectionOverride</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_674_676" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#AttributeElem_247_260" id="AttributeElem_684_697" title="Defined at line 14">AttributeElem</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_702_712" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="AttributeAssign_717_732" title="Not referenced locally, nor via imports">AttributeAssign</span> : <a href="#AttributeId_306_317" id="AttributeId_735_746" title="Defined at line 17">AttributeId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_749_752" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AttributeElem_247_260" id="AttributeElem_756_769" title="Defined at line 14">AttributeElem</a>
    <span id="AttributeInclude_774_790" title="Not referenced locally, nor via imports">AttributeInclude</span> : <a href="#AttributeId_306_317" id="AttributeId_793_804" title="Defined at line 17">AttributeId</a> * <a href="#AttributeIncludeIgnore_265_287" id="AttributeIncludeIgnore_807_829" title="Defined at line 15">AttributeIncludeIgnore</a> -&gt; <a href="#AttributeElem_247_260" id="AttributeElem_833_846" title="Defined at line 14">AttributeElem</a>
    <span id="AttributeIgnore_851_866" title="Not referenced locally, nor via imports">AttributeIgnore</span> : <a href="#AttributeId_306_317" id="AttributeId_869_880" title="Defined at line 17">AttributeId</a> -&gt; <a href="#AttributeElem_247_260" id="AttributeElem_884_897" title="Defined at line 14">AttributeElem</a>
    <span id="AttributeIncludeIgnoreNone_902_928" title="Not referenced locally, nor via imports">AttributeIncludeIgnoreNone</span> : <a href="#AttributeIncludeIgnore_265_287" id="AttributeIncludeIgnore_931_953" title="Defined at line 15">AttributeIncludeIgnore</a>
    <span id="AttributeIncludeIgnore_958_980" title="Not referenced locally, nor via imports">AttributeIncludeIgnore</span> : <span class="keyword">list</span>(<a href="#AttributeId_306_317" id="AttributeId_988_999" title="Defined at line 17">AttributeId</a>) -&gt; <a href="#AttributeIncludeIgnore_265_287" id="AttributeIncludeIgnore_1004_1026" title="Defined at line 15">AttributeIncludeIgnore</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributeCollectionOverrideNone_2705_2736" id="AttributeCollectionOverrideNone_1031_1062" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 71">AttributeCollectionOverrideNone</a> : <a href="#AttributeCollectionOverride_215_242" id="AttributeCollectionOverride_1065_1092" title="Defined at line 13">AttributeCollectionOverride</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributeCollectionOverride_2824_2851" id="AttributeCollectionOverride_1097_1124" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 74">AttributeCollectionOverride</a> : <a href="#AttributeCollectionOverride_215_242" id="AttributeCollectionOverride_1127_1154" title="Defined at line 13">AttributeCollectionOverride</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#AttributeSelection_5903_5921" id="AttributeSelection_1159_1177" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 122">AttributeSelection</a> : <a href="#AttributeId_306_317" id="AttributeId_1180_1191" title="Defined at line 17">AttributeId</a> -&gt; <a href="#AttributeSelection_192_210" id="AttributeSelection_1195_1213" title="Defined at line 12">AttributeSelection</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#AttributeIgnoreDefault_5356_5378" id="AttributeIgnoreDefault_1218_1240" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 114, 115, 116">AttributeIgnoreDefault</a> : <a href="#AttributeId_306_317" id="AttributeId_1243_1254" title="Defined at line 17">AttributeId</a> -&gt; <a href="#AttributeSelection_192_210" id="AttributeSelection_1258_1276" title="Defined at line 12">AttributeSelection</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#AttributeSelection2PropertyAssignment_5318_5355" id="AttributeSelection2PropertyAssignment_1281_1318" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 114, 115, 116, 122">AttributeSelection2PropertyAssignment</a> : <a href="#AttributeSelection_192_210" id="AttributeSelection_1321_1339" title="Defined at line 12">AttributeSelection</a> -&gt; <a href="../WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_1343_1361" title="Defined at ../WebDSL-UI-sig.stx line 19">PropertyAssignment</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributeSelection2Attribute_974_1002" id="AttributeSelection2Attribute_1366_1394" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 31">AttributeSelection2Attribute</a> : <a href="#AttributeSelection_192_210" id="AttributeSelection_1397_1415" title="Defined at line 12">AttributeSelection</a> -&gt; <a href="#Attribute_292_301" id="Attribute_1419_1428" title="Defined at line 16">Attribute</a>
</code></pre></td></tr></tbody></table></div>