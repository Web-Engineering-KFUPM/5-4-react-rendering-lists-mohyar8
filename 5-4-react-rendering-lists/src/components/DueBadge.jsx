function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}

export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate);
  let label = "";
  let cls = "badge";

  if (d < 0) {
    label = "Overdue";
    cls += " danger";
  } else if (d === 0) {
    label = "Due today";
    cls += " warn";
  } else if (d === 1) {
    label = "1 day remaining";
  } else {
    label = `${d} days remaining`;
  }

  return <span className={cls}>{label}</span>;
}
