# Software Design Specification Document

## Revision History

<table>
<tr>
<th>Name</th>
<th>Date</th>
<th>Reason for Changes</th>
<th>Version</th>
</tr>
<tr>
<td>Youssef Helal, Amr Mamdouh, Mohamed Elnaggar</td>
<td>20 Nov 2023</td>
<td>Initial version</td>
<td>1.0</td>
</tr>
<tr>
<td>Youssef Helal, Amr Mamdouh, Mohamed Elnaggar</td>
<td>9 Dec 2023</td>
<td>
Class Diagram : 
<ul>
<li>Added User Authentication</li>
<li>Added Question Interference</li>
</ul>
</td>
<td>2.0</td>
</tr>
<tr>
<td>Amr Mamdouh, Mohamed Elnaggar</td>
<td>26 Dec 2023</td>
<td>
Class Diagram : 
<ul>
<li>Renamed the Course class to Subject</li>
<li>Moved GetAutoGradedQuizzes(Subject subjecy) from the Subject class to The Quiz class</li>
<li>Added a LevelsOfDifficulty enum</li>
<li>Added a level of difficulty property to the Quiz class</li>
<li>Removed the material field from the Subject class</li>
</ul>
</td>
<td>3.0</td>
</tr>
</table>

## Conceptual Model

- [Context Diagram](diagrams/context-diagram.md)
- [Concept Diagram](diagrams/concept-diagram.md)
- [Usecase Diagram](diagrams/usecase-diagram.md)
- [CRC Cards](diagrams/CRC-Cards.md)
- [Sequence diagrams](diagrams/sequence-diagram.md)

## Design Diagrams

- [Class Diagram](diagrams/class-diagram.md)
