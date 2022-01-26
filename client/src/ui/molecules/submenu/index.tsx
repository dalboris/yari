import "./index.scss";
import React from "react";

type SubmenuItem = {
  component?: () => JSX.Element;
  description?: string;
  extraClasses?: string;
  hasIcon?: boolean;
  iconClasses?: string;
  label?: string;
  subText?: string;
  url?: string;
};

type MenuEntry = {
  id: string;
  items: SubmenuItem[];
  label: string;
};

export const Submenu = ({
  menuEntry,
  defaultHidden = false,
}: {
  menuEntry: MenuEntry;
  defaultHidden?: boolean;
}) => {
  return (
    <ul
      className={`submenu ${menuEntry.id} ${defaultHidden ? "hidden" : ""}`}
      role="menu"
      aria-labelledby={`${menuEntry.id}-button`}
    >
      {menuEntry.items &&
        menuEntry.items.map((item, index) => {
          const key = `${menuEntry.id}-${index}`;
          return (
            <li
              key={key}
              role="none"
              className={item.extraClasses || undefined}
            >
              {item.component ? (
                <item.component key={key} />
              ) : item.url ? (
                <a href={item.url} className="submenu-item" role="menuitem">
                  {item.hasIcon && <div className={item.iconClasses} />}
                  <div className="submenu-content-container">
                    <div className="submenu-item-heading">{item.label}</div>
                    {item.description && (
                      <p className="submenu-item-description">
                        {item.description}
                      </p>
                    )}
                    {item.subText && (
                      <span className="submenu-item-subtext">
                        {item.subText}
                      </span>
                    )}
                  </div>
                </a>
              ) : (
                <div key={key} className="submenu-item">
                  {item.hasIcon && <div className={item.iconClasses} />}
                  <div className="submenu-content-container">
                    <div className="submenu-item-heading">{item.label}</div>
                    {item.description && (
                      <p className="submenu-item-description">
                        {item.description}
                      </p>
                    )}
                    {item.subText && (
                      <span className="submenu-item-subtext">
                        {item.subText}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
    </ul>
  );
};
