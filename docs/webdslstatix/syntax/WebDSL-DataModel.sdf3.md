---
title: WebDSL-DataModel.sdf3
hide:
  - toc
---

# `WebDSL-DataModel.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataModel.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataModel.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-DataModel.sdf3 "The source file on GitHub"

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
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-DataModel_1_8" title="a definition with multiple references" data-urls="../WebDSL-AccessControl.sdf3/#WebDSL-DataModel line 6_3; ../WebDSL-Action.sdf3/#WebDSL-DataModel line 5_3; ../WebDSL-Core.sdf3/#WebDSL-DataModel line 5_3; ../WebDSL-DataValidation.sdf3/#WebDSL-DataModel line 7_3; ../WebDSL-Expand.sdf3/#WebDSL-DataModel line 8_3; ../WebDSL-Regex.sdf3/#WebDSL-DataModel line 6_3; ../WebDSL-Search.sdf3/#WebDSL-DataModel line 7_3; ../WebDSL-Service.sdf3/#WebDSL-DataModel line 8_3; ../webdsl-statix.sdf3/#WebDSL-DataModel line 9_3; ../WebDSL-Type.sdf3/#WebDSL-DataModel line 5_3">WebDSL-DataModel</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="EntityBodyDeclaration_10_3" title="a definition with multiple references" data-urls="#EntityBodyDeclaration line 16_8, 21_8, 26_8, 32_8, 37_8">EntityBodyDeclaration</button>

<span class="keyword">context-free syntax</span>

  <span id="Definition_14_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="Entity_14_14" title="a definition with no references">Entity</span></span> = &lt;
    <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_15_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_15_20" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_10_3" id="EntityBodyDeclaration_16_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_19_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="EntityNoSuper_19_14" title="a definition with no references">EntityNoSuper</span></span> = &lt;
    <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_10_3" id="EntityBodyDeclaration_21_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_24_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="SessionEntity_24_14" title="a definition with no references">SessionEntity</span></span> = &lt;
    <span class="cons_String">session</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_25_14" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_10_3" id="EntityBodyDeclaration_26_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_30_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="ExtendEntity_30_14" title="a definition with no references">ExtendEntity</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_31_20" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_10_3" id="EntityBodyDeclaration_32_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_35_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="ExtendSessionEntity_35_14" title="a definition with no references">ExtendSessionEntity</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">session</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_36_21" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_10_3" id="EntityBodyDeclaration_37_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

<span class="keyword">context-free restrictions</span>

  <span class="cons_Lit">"cache"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free syntax</span>

  <span id="Definition_47_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDecl_47_14" title="a definition with no references">GlobalVarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_48_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_48_20" title="a reference to a single-file definition">Sort</a>&gt;
  &gt;
  <span id="Definition_50_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclDepr_50_14" title="a definition with no references">GlobalVarDeclDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_51_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_51_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_53_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInit_53_14" title="a definition with no references">GlobalVarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_54_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_54_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_54_30" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <span id="Definition_56_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitDepr_56_14" title="a definition with no references">GlobalVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_57_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_57_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_57_30" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_59_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitInferred_59_14" title="a definition with no references">GlobalVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_60_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_60_21" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <span id="Definition_62_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitInferredDepr_62_14" title="a definition with no references">GlobalVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_63_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_63_21" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_65_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDecl_65_14" title="a definition with no references">RequestVarDecl</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_66_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_66_28" title="a reference to a single-file definition">Sort</a>&gt;
  &gt;
  <span id="Definition_68_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclDepr_68_14" title="a definition with no references">RequestVarDeclDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_69_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_69_28" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_71_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInit_71_14" title="a definition with no references">RequestVarDeclInit</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_72_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_72_28" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_72_38" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <span id="Definition_74_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitDepr_74_14" title="a definition with no references">RequestVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_75_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_75_28" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_75_38" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_77_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitInferred_77_14" title="a definition with no references">RequestVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_78_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_78_29" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <span id="Definition_80_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitInferredDepr_80_14" title="a definition with no references">RequestVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_81_18" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_81_29" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="OptPropAnnos_86_3" title="a definition with multiple references" data-urls="#OptPropAnnos line 91_37, 94_37">OptPropAnnos</button> <button class="modal-open" id="PropKind_86_16" title="a definition with multiple references" data-urls="#PropKind line 91_19, 94_19">PropKind</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="EntityBodyDeclaration_90_3" title="a definition with multiple references" data-urls="#EntityBodyDeclaration line 16_8, 21_8, 26_8, 32_8, 37_8">EntityBodyDeclaration</button>.<span class="cons_Constructor"><span id="Property_90_25" title="a definition with no references">Property</span></span> = &lt;
    &lt;<a href="../WebDSL-Action.sdf3/#PropertyId_207_3" id="PropertyId_91_6" title="a reference to a single-file definition">PropertyId</a>&gt; &lt;<a href="#PropKind_86_16" id="PropKind_91_19" title="a reference to a single-file definition">PropKind</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_91_30" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="#OptPropAnnos_86_3" id="OptPropAnnos_91_37" title="a reference to a single-file definition">OptPropAnnos</a>&gt;
  &gt;
  <button class="modal-open" id="EntityBodyDeclaration_93_3" title="a definition with multiple references" data-urls="#EntityBodyDeclaration line 16_8, 21_8, 26_8, 32_8, 37_8">EntityBodyDeclaration</button>.<span class="cons_Constructor"><span id="DerivedProperty_93_25" title="a definition with no references">DerivedProperty</span></span> = &lt;
    &lt;<a href="../WebDSL-Action.sdf3/#PropertyId_207_3" id="PropertyId_94_6" title="a reference to a single-file definition">PropertyId</a>&gt; &lt;<a href="#PropKind_86_16" id="PropKind_94_19" title="a reference to a single-file definition">PropKind</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_94_30" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="#OptPropAnnos_86_3" id="OptPropAnnos_94_37" title="a reference to a single-file definition">OptPropAnnos</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_94_55" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <button class="modal-open" id="EntityBodyDeclaration_96_3" title="a definition with multiple references" data-urls="#EntityBodyDeclaration line 16_8, 21_8, 26_8, 32_8, 37_8">EntityBodyDeclaration</button>.<span class="cons_Constructor"><span id="CachedEntity_96_25" title="a definition with no references">CachedEntity</span></span> = &lt;
    <span class="cons_String">cache</span>
  &gt;
  <button class="modal-open" id="OptPropAnnos_99_3" title="a definition with multiple references" data-urls="#OptPropAnnos line 91_37, 94_37">OptPropAnnos</button>.<span class="cons_Constructor"><span id="PropAnnos_99_16" title="a definition with no references">PropAnnos</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#Annotation_108_3" id="Annotation_99_33" title="a reference to a single-file definition">Annotation</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="OptPropAnnos_100_3" title="a definition with multiple references" data-urls="#OptPropAnnos line 91_37, 94_37">OptPropAnnos</button>.<span class="cons_Constructor"><span id="OptPropAnnosNone_100_16" title="a definition with no references">OptPropAnnosNone</span></span> = &lt;&gt;
  <button class="modal-open" id="PropKind_101_3" title="a definition with multiple references" data-urls="#PropKind line 91_19, 94_19">PropKind</button>.<span class="cons_Constructor"><span id="Simple_101_12" title="a definition with no references">Simple</span></span> = &lt;<span class="cons_String">::</span>&gt;
  <button class="modal-open" id="PropKind_102_3" title="a definition with multiple references" data-urls="#PropKind line 91_19, 94_19">PropKind</button>.<span class="cons_Constructor"><span id="Ref_102_12" title="a definition with no references">Ref</span></span> = &lt;<span class="cons_String">-</span>\&gt;&gt;
  <button class="modal-open" id="PropKind_103_3" title="a definition with multiple references" data-urls="#PropKind line 91_19, 94_19">PropKind</button>.<span class="cons_Constructor"><span id="Comp_103_12" title="a definition with no references">Comp</span></span> = &lt;\&lt;\&gt;&gt;
  <button class="modal-open" id="PropKind_104_3" title="a definition with multiple references" data-urls="#PropKind line 91_19, 94_19">PropKind</button>.<span class="cons_Constructor"><span id="AnyProp_104_12" title="a definition with no references">AnyProp</span></span> = &lt;<span class="cons_String">:</span>&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="Annotation_108_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Annotation_112_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="SimpleAnno_112_14" title="a definition with no references">SimpleAnno</span></span> = <a href="#AnnotationId_137_3" id="AnnotationId_112_27" title="a reference to a single-file definition">AnnotationId</a>
  <button class="modal-open" id="Annotation_113_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="TransientAnno_113_14" title="a definition with no references">TransientAnno</span></span> = &lt;<span class="cons_String">transient</span>&gt;
  <button class="modal-open" id="Annotation_114_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IdAnno_114_14" title="a definition with no references">IdAnno</span></span> = &lt;<span class="cons_String">id</span>&gt;
  <button class="modal-open" id="Annotation_115_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="NameAnno_115_14" title="a definition with no references">NameAnno</span></span> = &lt;<span class="cons_String">name</span>&gt;
  <button class="modal-open" id="Annotation_116_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="CacheAnno_116_14" title="a definition with no references">CacheAnno</span></span> = &lt;<span class="cons_String">cache</span>&gt;
  <button class="modal-open" id="Annotation_117_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="InverseAnno_117_14" title="a definition with no references">InverseAnno</span></span> = &lt;<span class="cons_String">inverse</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_117_40" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_117_47" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="Annotation_118_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IncompleteInverseAnno_118_14" title="a definition with no references">IncompleteInverseAnno</span></span> = &lt;<span class="cons_String">inverse</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_118_50" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="Annotation_119_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="InverseSlaveAnno_119_14" title="a definition with no references">InverseSlaveAnno</span></span> = &lt;<span class="cons_String">inverseSlave</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_119_50" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_119_57" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="Annotation_120_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="InverseReferenceOnlyAnno_120_14" title="a definition with no references">InverseReferenceOnlyAnno</span></span> = &lt;<span class="cons_String">inverse-reference-only</span>&gt;
  <button class="modal-open" id="Annotation_121_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="InlineAnno_121_14" title="a definition with no references">InlineAnno</span></span> = &lt;<span class="cons_String">inline</span> <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_121_39" title="a reference to a single-file definition">Id</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Annotation_122_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="SelectAnno_122_14" title="a definition with no references">SelectAnno</span></span> = &lt;<span class="cons_String">select</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_122_38" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="Annotation_123_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="NotNullAnno_123_14" title="a definition with no references">NotNullAnno</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">null</span>&gt;
  <button class="modal-open" id="Annotation_124_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="NotEmptyAnno_124_14" title="a definition with no references">NotEmptyAnno</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">empty</span>&gt;
  <button class="modal-open" id="Annotation_125_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="AllowedAnno_125_14" title="a definition with no references">AllowedAnno</span></span> = &lt;<span class="cons_String">allowed</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_125_40" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Annotation_126_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="DefaultAnno_126_14" title="a definition with no references">DefaultAnno</span></span> = &lt;<span class="cons_String">default</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_126_40" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Annotation_127_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="LengthAnno_127_14" title="a definition with no references">LengthAnno</span></span> = &lt;<span class="cons_String">length</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_127_38" title="a reference to a single-file definition">Int</a>&gt;&gt;
  <button class="modal-open" id="Annotation_128_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="FormatAnno_128_14" title="a definition with no references">FormatAnno</span></span> = &lt;<span class="cons_String">format</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_128_38" title="a reference to a single-file definition">String</a>&gt;&gt;
  <button class="modal-open" id="Annotation_129_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IndexEmptyAnno_129_14" title="a definition with no references">IndexEmptyAnno</span></span> = &lt;<span class="cons_String">index</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Annotation_130_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IndexAnno_130_14" title="a definition with no references">IndexAnno</span></span> = &lt;<span class="cons_String">index</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_130_36" title="a reference to a single-file definition">Int</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Annotation_131_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="CollationAnno_131_14" title="a definition with no references">CollationAnno</span></span> = &lt;<span class="cons_String">collation</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_131_44" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Annotation_132_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IdErrorAnno_132_14" title="a definition with no references">IdErrorAnno</span></span> = &lt;<span class="cons_String">iderror</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_132_40" title="a reference to a single-file definition">String</a>&gt;&gt;
  <button class="modal-open" id="Annotation_133_3" title="a definition with multiple references" data-urls="#Annotation line 99_33; ../WebDSL-Type.sdf3/#Annotation line 21_26">Annotation</button>.<span class="cons_Constructor"><span id="IdEmptyErrorAnno_133_14" title="a definition with no references">IdEmptyErrorAnno</span></span> = &lt;<span class="cons_String">idemptyerror</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_133_50" title="a reference to a single-file definition">String</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <a href="#AnnotationId_112_27" id="AnnotationId_137_3" title="a definition with a single reference">AnnotationId</a>

<span class="keyword">lexical syntax</span>

  <a href="#AnnotationId_112_27" id="AnnotationId_141_3" title="a definition with a single reference">AnnotationId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_141_18" title="a reference to a single-file definition">Id</a>
  <a href="#AnnotationId_112_27" id="AnnotationId_142_3" title="a definition with a single reference">AnnotationId</a> = <span class="cons_Lit">"searchable"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_112_27" id="AnnotationId_143_3" title="a definition with a single reference">AnnotationId</a> = <span class="cons_Lit">"transient"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_112_27" id="AnnotationId_144_3" title="a definition with a single reference">AnnotationId</a> = <span class="cons_Lit">"id"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_112_27" id="AnnotationId_145_3" title="a definition with a single reference">AnnotationId</a> = <span class="cons_Lit">"name"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_112_27" id="AnnotationId_146_3" title="a definition with a single reference">AnnotationId</a> = <span class="cons_Lit">"cache"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
